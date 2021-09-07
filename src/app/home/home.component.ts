import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
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
