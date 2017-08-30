import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import $ from "jquery";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public NavController: NavController, public navParams: NavParams) {
  }

  login(){
 	this.NavController.pop();
  }
  showSignUp(){
  		$('.login-container').hide();
  		$('.signup-container').show();
  }
  showLogin(){
    	$('.signup-container').hide();
  		$('.login-container').show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
