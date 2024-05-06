import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.issue.cap.http.ng.maps',
  appName: 'issue-cap-http-ng-maps',
  webDir: 'www',
  android: {
    webContentsDebuggingEnabled: true,
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    }
  }
};

export default config;
