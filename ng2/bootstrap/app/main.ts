import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component'
import {enableProdMode} from '@angular/core';
import {provideForms, disableDeprecatedForms} from '@angular/forms';


import {APP_ROUTER_PROVIDERS} from './app.routing';
import {HTTP_PROVIDERS} from '@angular/http';

//enableProdMode();

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS,HTTP_PROVIDERS,disableDeprecatedForms(), provideForms()]);