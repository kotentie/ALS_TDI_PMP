import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import $ from "jquery";
import { ActionSheetController } from 'ionic-angular';


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

  constructor(public NavController: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

 

  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Do you have A.L.S?',
     buttons: [
       {
         text: 'Yes',
         role: 'Yes',
         handler: () => {	
 		    $('.login-container').hide();
  			$('.call-signup-container').show();
         }
       },
       {
         text: 'No',
         handler: () => {
            $('.login-container').hide();
  			$('.signup-container').show();
         }
       }
     ]
   });

   actionSheet.present();
 }

  login(){
  

  var pass = $('#password input').val();
  var user = $('#username input').val();

  var root = 'https://jsonplaceholder.typicode.com';
  
  var that = this;



  $.ajax({
  url: root + '/posts',
  method: 'POST',
  data: {
    grant_type: 'password',
    client_id: 'pmp_app_client',
    client_secret: 'sKkuCRMfALQtYL7D',
    username: user,
    password: pass
    }
   }).then(function(data){
     if(data){
 //     window.localStorage.setItem('access_token', data.access_token);
 //     window.localStorage.setItem('refresh_token', data.refresh_token);
        that.NavController.pop(); 

 
     }else{
       alert('Not Cool');
     }

   });



  }
  showSignUp(){
  		this.presentActionSheet();

  }
  showLogin(){
    	$('.signup-container').hide();
  		$('.login-container').show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
