import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../../pages/dashboard/dashboard';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

	mainModel: any = [];
	mainFunction: any = [];
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
  

	openDashboard()
		{
			if ( this.navCtrl.getActive().name != 'DashboardPage' )
				{
					this.navCtrl.setRoot(DashboardPage);
					this.navCtrl.popToRoot();
				}
		}
		
}
