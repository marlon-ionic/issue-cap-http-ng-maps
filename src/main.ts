import { APP_INITIALIZER, enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { Loader } from '@googlemaps/js-api-loader';

if (environment.production) {
  enableProdMode();
}

function loadGoogleMaps() {
  const loader = new Loader({
    apiKey: `${environment.googleMapApiKey}`,
    version: "weekly"
  });
  return async () => await loader.importLibrary('places');
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    { provide: APP_INITIALIZER, useFactory: loadGoogleMaps, multi: true }
  ],
});
