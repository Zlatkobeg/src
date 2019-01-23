import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

import { LoginPage } from '../login/login';

/**
 * Generated class for the ForgotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

	mainModel: any = [];
	mainFunction: any = [];
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() 
		{
			let thCtr = this.navCtrl;
			let mainthis = this;
			// Function for validation Email address
			function validateEmail(email) 
				{
					var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return re.test(email);
				}  

			mainthis.mainModel['forgot'] = [
											{
												'email': ['', 'Wrong Email', 0]
											}
										]
		}
		
	openLogin()
		{
			this.navCtrl.setRoot(LoginPage);
			this.navCtrl.popToRoot();
		}	
}
