# Capacitor Http Issue (Regression Introduced in 5.7.1)

This project is a minimal reproduction of an issue with Capacitor Http. The regression was introduced in 5.7.1. This project includes the Angular Google Maps component. In version 5.7.0, users are able to pan around the app as map tiles loaded without issue. In version 5.7.1 and higher, the inital map tiles load, but when the user pans around the map, the map tiles do not load. The issue is not present in version 5.7.0.

## A valid Google Maps API Key is required

This project uses the Angular Google Maps component. To run this project, you will need to provide a valid Google Maps API key. You can obtain a key by following the instructions [here](https://developers.google.com/maps/documentation/javascript/get-api-key). Then you can place the key in the `.env` file at the root of the project. The key should be placed in the `.env` file like this (via [@ngx-env/builder](https://www.npmjs.com/package/@ngx-env/builder)):

```env
NG_APP_GOOGLE_MAPS_KEY=YourAPIKeyGoesHere
```

## Steps to reproduce the issue

1. Clone the project and install the dependencies
2. Cap 6 is the default version. For convenience, there are scripts to switch to specific versions. See below:
   1. To switch to version Capacitor 5.7.1, run `npm run cap:571`
   2. To switch to version Capacitor 6, run `npm run cap:6`
   3. To switch to version Capacitor 5.7.0 (last working version), run `npm run cap:570`
3. Run `npx cap run ios` or `npx cap run android`

## Expected behavior

When the map loads, the user should be able to pan around the map and the map tiles should load as expected.

## Actual behavior

After the initial load, the map tiles do not load when the user pans around the map.
