import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import * as $ from 'jquery'; 

import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Keyboard]
})
export class HomePage {

 constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {
	}
	
  ionViewDidLoad() {
		
		window['site_url'] = 'https://www.onlinetrainer.app/';   
		 
		window['gajax'] = function (url, post, func)
			{
				post['Auth'] = localStorage.getItem("Auth");
				url = window['site_url'] + url;
				$.post(url, post, function (data, status, xhr)
										{
											
											localStorage.setItem("Auth", (xhr.getResponseHeader('Auth') ? xhr.getResponseHeader('Auth') : ''));
											func(data);
										});
			}
	
		let thCtr = this.navCtrl;
        
		setTimeout(function(){
			window['gajax']('account/getnetworkusers', {  },  function(data, status, xhr)
				{ 
					data = JSON.parse(data); 
					
					window['user'] = data['user_info'];
					window['user_plan'] = data['user_plan'];
					
					window['recepies_list'] = data['recepies'];
					window['workout_list'] = data['workout']; 
					
					console.log(window['workout_list']);
					
					window['filter_list'] = data['filter_list'];
					//window['saveBase64Images'](data['image_to_save']);
					//console.log(window['filter_list']);	
					//console.log(window['allSavedPictures']);
					thCtr.push(DashboardPage);
				});
		}, 1000);
		
		//window['allSavedPictures'] = [];
		//window['allSavedPicturesChecker'] = [];
		
		/* window['saveBase64Images'] = function(img) 
				{
					var xhr = new XMLHttpRequest();
					var reader = new FileReader();
					for( let i = 0; i < img.length; i++ )
						{
							if( window['allSavedPicturesChecker'].indexOf(img[i]) == -1 )
								{
									xhr.open('POST', img[i], true);
									xhr.responseType = 'blob'; 
									
									var params = 'Auth='+localStorage.getItem("Auth");
									//console.log(img[i]);
									//console.log(xhr);
									
									xhr.onload = function(e) {
										console.log('onload');
										//alert('onload');
									  if (this.status == 200) {
										// get binary data as a response
										var blob = this.response;
										reader.onload = function (e) {
											console.log(img[i]);
											let imgSrc; 
											imgSrc = e;
											window['allSavedPictures'].push({
																				'originalImage': img[i],
																				'base64Image': imgSrc.target.result
																			});
											window['allSavedPicturesChecker'].push(img[i]);
											
											console.log(img[i]);
											console.log(imgSrc.target.result);
										}
										reader.readAsDataURL(blob);
									  }
									};
									
									xhr.send();
								}
						} 
				} */
				
		// disable keyboard scrolling the page
		this.keyboard.disableScroll(true);
	
		// Event for showing keyboard
		window.addEventListener('native.showkeyboard', showKeybord);
		
		// When keyboard is visible hide footer and change height of text field
		function showKeybord(e)
		{
			
		}
		
		// Event for hidding keyboard
		window.addEventListener('native.hidekeyboard', hideKeybord);
		
		
		// When keyboard is visible show footer and change height of text field
		function hideKeybord(e)
		{
			
		}	
		
		window['check_notifications_timeout'] = 0; 
		window['check_notifications_timeout1'] = 0; 
		window['check_notifications'] = function(first_run)
			{
				/*return new Promise((resolve, reject) => { 
					console.log('ulazi');
					window['gajax']('update/getnotifications', {'first_run': first_run},  function(data, status, xhr)
						{
							console.log('proslo ajax');
							console.log('data');
							
						//	$r['avatar'] != '' ? $alerts['image_to_save'][] = site_url.'upload/avatars/'.$r['avatar'] : '';
							//data = JSON.parse(data); 
							//resolve(data);
							
							/* if ( typeof data['calls'] !== 'undefined' ) 
								{ 
									
									let data2 = JSON.parse(data['calls']);
									window['main_call_list'] = data2['call_list'];
								//	window['saveBase64Images'](data2['call_images']);
									window['main_event'].publish('updateCalls', {'main_calls': window['main_call_list']});
								}
							
						});
						
					if ( window['check_notifications_timeout1'] > 0 ) { clearTimeout(window['check_notifications_timeout1']); window['check_notifications_timeout1'] = 0; }
					window['check_notifications_timeout1'] = setTimeout(function () { window['check_notifications'](); }, 1000); 
				});*/
			}
		//window['check_notifications'](11);	 
		
		window['calculate_resize_all'] = function(key_height)
				{
					let pages_scroll_settings = [
													 {
														 'page': 'page-dashboard',
														 'header_size': 45,
														 'footer_size': 45,
														 'additional_btn': 0,
														 'keyboard_height': key_height
													 },
													 {
														 'page': 'workout-details',
														 'header_size': 45,
														 'footer_size': 45,
														 'additional_btn': 0,
														 'keyboard_height': key_height
													 },
													  {
														 'page': 'workout-index',
														 'header_size': 45,
														 'footer_size': 45,
														 'additional_btn': 0,
														 'keyboard_height': key_height
													 },
													  {
														 'page': 'recepies-details',
														 'header_size': 45,
														 'footer_size': 45,
														 'additional_btn': 0,
														 'keyboard_height': key_height
													 },
													  {
														 'page': 'recepies-index',
														 'header_size': 45,
														 'footer_size': 45,
														 'additional_btn': 0,
														 'keyboard_height': key_height
													 },
													  {
														 'page': 'page-workout .all_filter',
														 'header_size': 140,
														 'footer_size': 0,
														 'additional_btn': 0,
														 'keyboard_height': key_height
													 },
													 
												];
										
						let pred_styles = '<style>';
						$.each(pages_scroll_settings, function(a, b){
							let key_or_foot = b['footer_size'];
							if( b['keyboard_height'] > 0 ) { key_or_foot = b['keyboard_height'];  }
							pred_styles += b['page']+' .scroll-y { height: '+(window['origHeightNav'] - b['header_size'] - b['additional_btn'] - key_or_foot)+'px; }';
						});
						
						pred_styles += '</style>';
						$('#for_style').html(pred_styles); 	
				}
				
			window['origHeightNav'] = $('ion-nav').height();	
			window['calculate_resize_all'](0);
		
    }
}
