import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { RecordPage } from '../record/record';
import { ListenPage } from '../listen/listen';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecordPage;
  tab3Root = ListenPage;

  constructor(public navCtrl: NavController) {
  	this.navCtrl.push(LoginPage);
  }


  	

}
