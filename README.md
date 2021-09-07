# Ví dụ về Single Sign-on (SSO) Auth0

## Cài đặt

Cài đặt thư viện [angular-oauth2-oidc](https://www.npmjs.com/package/angular-oauth2-oidc)

```bash
npm install angular-oauth2-oidc --save
```

## AppModule

```typescript
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    ...
    OAuthModule.forRoot() // Import SSO
  ],
  providers: [], // Providers SSO
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Environment

```json 
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
```

## AppConponent

```typescript
export class AppComponent {

  constructor(public sso: OAuthService) {
    this.configSSO();
  }

  /**
   * Configuring Single Sign-On
   */
  private configSSO(): void {
    this.sso.configure(ssoConfig);

    /** enable below validation only if jwks object is defined as part of oauthconfig obj */
    // this.sso.tokenValidationHandler = new JwksValidationHandler();
    this.sso.setStorage(sessionStorage);

    /** commented below because below resource is protected by some identity server ex: wso2 */
    // this.sso.loadDiscoveryDocumentAndTryLogin();

    this.sso.tryLogin();
  }
}
```
## HomeComponent

```typescript
export class HomeComponent implements OnInit {

  constructor(public sso: OAuthService) { }

  /**
   * Init component
   */
  ngOnInit(): void {
    // sessionStorage
    console.log('sessionStorageExpiresAt: ', sessionStorage.getItem('expires_at'));
    console.log('sessionStorageAccessToken: ', sessionStorage.getItem('access_token'));
    // Form service
    console.log('getAccessToken: ', this.sso.getAccessToken())
    console.log('hasValidAccessToken: ', this.sso.hasValidAccessToken())
  }

}
```

## HomeComponent - html

```xml
<div style="text-align: center;">
    <h1>Author: DaiDH</h1>

    <hr>
    <button (click)="sso.initImplicitFlow()" *ngIf="!sso.hasValidAccessToken()">Login</button>
    <button (click)="sso.logOut()" *ngIf="sso.hasValidAccessToken()">Logout</button>
    <hr>
    
    <img [src]="sso.hasValidAccessToken() ? 'https://i.ytimg.com/vi/AcuzemsJfxA/maxresdefault.jpg': 'https://hocwordpress.vn/wp-content/uploads/2020/04/login-custom-2.jpg'" alt="sso">

    <h4>Expiration Time: {{sso.getAccessTokenExpiration() | date: 'dd-MM-yyyy HH:mm:ss'}}</h4>

    <h4>AccessToken:</h4>
    <textarea cols="30" rows="10" style="width: 40%;">
        {{sso.getAccessToken() | json}}
    </textarea>
</div>
```

## License
[MIT](https://choosealicense.com/licenses/mit/)