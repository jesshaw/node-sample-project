import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

// https://github.com/auth0-blog/angular2-authentication-sample
// https://github.com/auth0-blog/ionic2-auth

@Injectable()
export class AuthService {
  constructor() {}
  
  public authenticated() {
    return tokenNotExpired();
  }
}