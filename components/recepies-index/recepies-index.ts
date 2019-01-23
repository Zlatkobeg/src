import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Scroll } from 'ionic-angular';

import { DashboardPage } from '../../pages/dashboard/dashboard';

/**
 * Generated class for the RecepiesIndexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recepies-index',
  templateUrl: 'recepies-index.html'
})
export class RecepiesIndexComponent {
	
	@ViewChild(Scroll) scroll: Scroll;
	mainModel: any = [];
	mainFunction: any = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	ngAfterViewInit() {
		
	}

}
