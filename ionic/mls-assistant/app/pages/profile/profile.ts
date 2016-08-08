import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AuthService} from '../../shared/auth.service';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {

  constructor(private nav: NavController,private auth: AuthService) {

  }

}
