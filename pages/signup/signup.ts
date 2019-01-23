import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';

import * as $ from 'jquery';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})


export class SignupPage {
	
	mainModel: any = [];
	mainFunction: any = [];
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		let thCtr = this.navCtrl;
		let mainthis = this;
		
		mainthis.mainModel['signUp'] = [
											{
												'fname': ['', 'First Name must have at least 2 caracters', 0],
												'lname': ['', 'Last Name must have at least 2 caracters', 0],
												'email': ['', 'Wrong Email', 0],
												'password': ['', 'Password must be between 5 and 15 caracters', 0],
												'confirm_password': ['', 'Passwords not match ', 0],
												'send_promotion': 0,
											}
										]
										
		mainthis.mainFunction['checkCheckbox'] = function()
			{
				if ( mainthis.mainModel['signUp'][0]['send_promotion'] == 0 ) { mainthis.mainModel['signUp'][0]['send_promotion'] = 1; }
				else { mainthis.mainModel['signUp'][0]['send_promotion'] = 0; }
			}
		
		// Function for validation Email address
		function validateEmail(email) 
			{
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
		
		mainthis.mainFunction['signUp'] = function()
			{
				let canSignUp = true;
				
				if ( $.trim(mainthis.mainModel['signUp'][0]['fname'][0]).length < 2 )
					{
						mainthis.mainModel['signUp'][0]['fname'][2] = 1;
						canSignUp = false;
					}
				else
					{
						mainthis.mainModel['signUp'][0]['fname'][2] = 0;
					}	
				
				if ( $.trim(mainthis.mainModel['signUp'][0]['lname'][0]).length < 2 )
					{
						mainthis.mainModel['signUp'][0]['lname'][2] = 1;
						canSignUp = false;
					}
				else
					{
						mainthis.mainModel['signUp'][0]['lname'][2] = 0;
					}
				
				if ( !validateEmail(mainthis.mainModel['signUp'][0]['email'][0]) )
					{
						mainthis.mainModel['signUp'][0]['email'][2] = 1;
						canSignUp = false;
					}
				else
					{
						mainthis.mainModel['signUp'][0]['email'][2] = 0;
					}
					
				if ( $.trim(mainthis.mainModel['signUp'][0]['password'][0]).length < 5 || $.trim(mainthis.mainModel['signUp'][0]['password'][0]).length > 15 )
					{
						mainthis.mainModel['signUp'][0]['password'][2] = 1;
						canSignUp = false;
					}
				else
					{
						mainthis.mainModel['signUp'][0]['password'][2] = 0;
					}	
				
				if ( mainthis.mainModel['signUp'][0]['confirm_password'][0] != mainthis.mainModel['signUp'][0]['confirm_password'][0] )
					{
						mainthis.mainModel['signUp'][0]['confirm_password'][2] = 1;
						canSignUp = false;
					}
				else
					{
						mainthis.mainModel['signUp'][0]['confirm_password'][2] = 0;
					}
				
				console.log(mainthis.mainModel['signUp']);
				
				if( canSignUp )
					{
						window['gajax']('account/signup', { 'model': mainthis.mainModel['signUp'] },  function(data, status, xhr)
							{
								if ( data == 'Success' )
									{
										mainthis.navCtrl.setRoot(DashboardPage);
										mainthis.navCtrl.popToRoot();
										mainthis.mainModel['signUp'] = [
																			{
																				'fname': ['', 'First Name must have at least 2 caracters', 0],
																				'lname': ['', 'Last Name must have at least 2 caracters', 0],
																				'email': ['', 'Wrong Email', 0],
																				'password': ['', 'Password must be between 5 and 15 caracters', 0],
																				'confirm_password': ['', 'Passwords not match ', 0],
																				'send_promotion': 0,
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
