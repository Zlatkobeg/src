import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as $ from 'jquery';

import { DashboardPage } from '../dashboard/dashboard';
import { ForgotPage } from '../forgot/forgot';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	mainModel: any = [];
	mainFunction: any = [];
	
	constructor(public navCtrl: NavController, public navParams: NavParams ) {
	}
	
	ionViewDidLoad() 
		{
			let thCtr = this.navCtrl;
			let mainthis = this;
			
			mainthis.mainModel['login'] = [
												{
													'email': ['', 'Wrong Email', 0],
													'password': ['', 'Password must be between 5 and 15 caracters', 0],
												}
											]
			// Function for validation Email address
			function validateEmail(email) 
				{
					var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return re.test(email);
				}		
					
			mainthis.mainFunction['forgotPassword'] = function()
				{
					mainthis.navCtrl.setRoot(ForgotPage);
					mainthis.navCtrl.popToRoot();
				}
					
			mainthis.mainFunction['login'] = function()
				{
					let canLogin = true;	
				
					if ( !validateEmail(mainthis.mainModel['login'][0]['email'][0]) )
						{
							mainthis.mainModel['login'][0]['email'][2] = 1;
							canLogin = false;
						}
					else
						{
							mainthis.mainModel['login'][0]['email'][2] = 0;
						}
						
					if ( $.trim(mainthis.mainModel['login'][0]['password'][0]).length < 5 || $.trim(mainthis.mainModel['login'][0]['password'][0]).length > 15 )
						{
							mainthis.mainModel['login'][0]['password'][2] = 1;
							canLogin = false;
						}
					else
						{
							mainthis.mainModel['login'][0]['password'][2] = 0;
						}	

					if( canLogin )
						{
							window['gajax']('account/login', { 'model': mainthis.mainModel['login'] },  function(data, status, xhr)
								{
									if ( data == 'Success' )
										{

											mainthis.navCtrl.setRoot(DashboardPage);
											mainthis.navCtrl.popToRoot();
											mainthis.mainModel['login'] = [
																				{
																					'email': ['', 'Wrong Email', 0],
																					'password': ['', 'Password must be between 5 and 15 caracters', 0],
																				}
																			]
										}
								});
						}
				}								
		}
		
	openDashboard()
		{
			this.navCtrl.setRoot(DashboardPage);
			this.navCtrl.popToRoot();
		}		
}
