import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Scroll, Events } from 'ionic-angular';

import * as $ from 'jquery';

import { DashboardPage } from '../dashboard/dashboard';

import { CreateplanIndexComponent } from '../../components/createplan-index/createplan-index';
/**
 * Generated class for the CreateplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-createplan',
  templateUrl: 'createplan.html',
})
export class CreateplanPage {
	@ViewChild(Scroll) scroll: Scroll;
	@ViewChild(CreateplanIndexComponent) createplan_index: CreateplanIndexComponent
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
	}
	
	mainModel: any = [];
	mainFunction: any = [];
	
	ionViewDidLoad() 
		{
			let mainthis = this;
			let thCtr = this.navCtrl; 
	 
			mainthis.createplan_index.mainModel = mainthis.mainModel;
			mainthis.createplan_index.mainFunction = mainthis.mainFunction;
		}

	openDashboard()
		{
			this.navCtrl.setRoot(DashboardPage);
			this.navCtrl.popToRoot();
		}
  
}
