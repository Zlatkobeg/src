import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

import { CreateplanPage } from '../createplan/createplan';
import { WorkoutPage } from '../workout/workout';
import { RecepiesPage } from '../recepies/recepies'; 
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { HeaderComponent } from '../../components/header/header';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
	@ViewChild(HeaderComponent) header: HeaderComponent
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	 
	}

	mainModel: any = [];
	mainFunction: any = [];
	
	ionViewDidLoad() 
	{
		let mainthis = this;
		
		mainthis.header.mainModel = mainthis.mainModel;
		mainthis.header.mainFunction = mainthis.mainFunction;

		setTimeout(function ()
			{
				document.addEventListener("resume", function () { window['check_notifications'](); }, false);
			}, 1000);
		
		mainthis.mainModel['user'] = window['user'];
		mainthis.mainModel['user_plan'] = window['user_plan'];
		
		if ( window['user'].length == 0 ) { mainthis.mainModel['user'] =  { 'id': 0 } }	
		else { mainthis.mainModel['user'] = window['user'] }
				
		mainthis.mainFunction['openPopUp'] = function(num)
			{
				$('page-dashboard .drHoldLeft').css({'left': num+'px'});
				if ( num == 0 ) { $('.drop_fhold').show(); }
				else { $('.drop_fhold').hide(); }
			}			
				
		mainthis.mainFunction['openSignUp'] = function()
			{
				mainthis.navCtrl.setRoot(SignupPage);
				mainthis.navCtrl.popToRoot();
			}

		mainthis.mainFunction['openLogin'] = function()
			{
				mainthis.navCtrl.setRoot(LoginPage);
				mainthis.navCtrl.popToRoot();
			}	
		
		mainthis.mainFunction['logout'] = function()
			{
				window['gajax']('account/logout', {  },  function(data, status, xhr)
					{
						if ( data == 'Success' )
							{
								mainthis.navCtrl.setRoot(LoginPage);
								mainthis.navCtrl.popToRoot();
							}
					});
			}	
	}
  
	openWorkout()
		{
			this.navCtrl.setRoot(WorkoutPage);
			this.navCtrl.popToRoot();
		}
		
	openCreateplan()
		{
			this.navCtrl.setRoot(CreateplanPage);
			this.navCtrl.popToRoot();
		}	
		
	openRecepies()
		{
			console.log(111);
			this.navCtrl.setRoot(RecepiesPage);
			this.navCtrl.popToRoot();
		}		
		
}
