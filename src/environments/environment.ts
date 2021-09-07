// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  sso: {
    "clientId": "nPzsAOuuadNBF4sZUC4YAre43nca",
    "issuer": "https://sso.tcmotor.vn/oauth2/token", 
    "redirectUri": "http://localhost:4200/callback",
    "loginUrl":  "https://sso.tcmotor.vn/oauth2/authorize",
    "tokenEndpoint": "https://sso.tcmotor.vn/oauth2/token",
    "userinfoEndpoint":  "https://sso.tcmotor.vn/oauth2/userinfo",
    "requireHttps": false,
    "requestAccessToken": true,
    "disableAtHashCheck": false,
    "showDebugInformation": true,
    "scope": "openid",
    "responseType": "id_token token"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
