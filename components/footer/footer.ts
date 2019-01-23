import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  text: string;

 constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
}
