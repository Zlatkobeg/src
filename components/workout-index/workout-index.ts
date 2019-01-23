import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Scroll } from 'ionic-angular';

import { DashboardPage } from '../../pages/dashboard/dashboard';
/**
 * Generated class for the WorkoutIndexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'workout-index',
  templateUrl: 'workout-index.html'
})
export class WorkoutIndexComponent {
	@ViewChild(Scroll) scroll: Scroll;
	mainModel: any = [];
	mainFunction: any = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	ngAfterViewInit() {
		
	}
}
