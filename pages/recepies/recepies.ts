import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Scroll, Events } from 'ionic-angular';
import * as $ from 'jquery';

import { DashboardPage } from '../dashboard/dashboard';

import { RecepiesIndexComponent } from '../../components/recepies-index/recepies-index';
import { RecepiesDetailsComponent } from '../../components/recepies-details/recepies-details';

/**
 * Generated class for the RecepiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recepies',
  templateUrl: 'recepies.html',
})
export class RecepiesPage {
	@ViewChild(Scroll) scroll: Scroll;
	@ViewChild(RecepiesIndexComponent) recepies_index: RecepiesIndexComponent
	@ViewChild(RecepiesDetailsComponent) recepies_details: RecepiesDetailsComponent
	
	mainModel: any = [];
	mainFunction: any = [];
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		
		let mainthis = this;
		
		mainthis.recepies_index.mainModel = mainthis.mainModel;
		mainthis.recepies_index.mainFunction = mainthis.mainFunction;
		
		mainthis.recepies_details.mainModel = mainthis.mainModel;
		mainthis.recepies_details.mainFunction = mainthis.mainFunction;
		
		$('.training').addClass('active');
		
		mainthis.recepies_index.mainFunction['openPage'] = function (th)
			{
				$('page-recepies .recepies').removeClass('active');
				$('page-recepies .'+th).addClass('active');
			}
			
		mainthis.mainFunction['openDrop'] = function (pg)
			{
				$('page-recepies .'+pg).addClass('active');
			}
			
		mainthis.mainFunction['closeDrop'] = function (pg)
			{
				$('page-recepies .'+pg).removeClass('active');
			}
			
		mainthis.mainFunction['checkCheckbox'] = function (ev)
			{
				let elem = ev.currentTarget || ev.srcElement;
				$(elem).toggleClass('active');
			}	
			
		mainthis.mainModel['workout_info'] = [];	
		mainthis.mainFunction['openRecepies'] = function(mod)
		{
			$('page-recepies .recepies').removeClass('active');
			$('page-recepies .recepies_details').addClass('active');
			let video = mod['video_link'];
			let poster = mod['image'];
			let name = mod['name'];
			let like = mod['like'];
			let templateRecepies = '<video id="recepies_video" width="100%" height="auto" preload="auto" poster="'+poster+'">'+
										'<source src="'+video+'" type="video/mp4">'+
									'</video>'+
									'<div>'+
										'<div class="btn_play"></div>'+
										'<div class="info_title1">'+
											'<div class="pad_b5">'+
												'<div class="five_star_empty">'+
													'<div class="five_star"></div>'+
												'</div>'+
											'</div>'+
											'<div class="white_title_small">'+name+'</div>'+
										'</div>'+
										'<div class="abs_like">'+
											'<div class="rel_circle_small">'+
												'<div class="width1per">'+
												'</div><div class="logo_text f_size12 rest99per">OT</div>'+
												'<div class="circle_like_small">'+
													'<div class="width1per">'+
													'</div><div class="rest99per">'+like+'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>';
									
			$('#for_recepies_details').html(templateRecepies);
			mainthis.mainModel['recepies_info'] = mod;
			
			$('#for_recepies_details').click(function(ev){
				if ( $('.btn_play').is(":hidden") )
					{
						let elem = ev.currentTarget || ev.srcElement;
						let video = $(elem).find('video');
						let vid = document.getElementById("recepies_video");
						$(video)[0].pause();
						$(video)[0].controls = false;
						$(elem).find('.info_title1').animate({bottom: '0px'}, 500);
						$(elem).find('.abs_like').animate({bottom: '16px'}, 500, function()
							{ 
								$(elem).find('btn_play').show(); 
							});
					}
			});
				
			$('.btn_play').click(function(ev){
				ev.stopPropagation();
				ev.preventDefault();
				let elem = ev.currentTarget || ev.srcElement;
				let video = $(elem).parent().parent().find('video');
			
				console.log('play');
				$(video)[0].controls = true;
				$(video)[0].play();
				$(elem).parent().find('.info_title1').animate({bottom: '-70px'}, 500);
				$(elem).parent().find('.abs_like').animate({bottom: '-30px'}, 500);
				$(elem).hide();
				
				let vid = document.getElementById("recepies_video");
				vid.onpause = function() {
					$(video)[0].controls = false;
					$(elem).parent().find('.info_title1').animate({bottom: '0px'}, 500);
					$(elem).parent().find('.abs_like').animate({bottom: '16px'}, 500, function(){ $(elem).show(); });
				}; 
			});	
				
				
		}		
		
		
		mainthis.mainFunction['openDropBottom'] = function (ev)
			{
				let elem = ev.currentTarget || ev.srcElement;
				if ( $(elem).parent().find('.drop_open').hasClass('active') )
					{
						$('page-recepies .all_filter .drop_open').removeClass('active');
					}
				else
					{
						$('page-recepies .all_filter .drop_open').removeClass('active');
						$(elem).parent().find('.drop_open').addClass('active');
					}
			}
			
		mainthis.mainModel['recepies_list'] = window['recepies_list'];
		
		
		mainthis.mainModel['filter_list'] = [
												{
													'name': 'Difficulty',
													'class': 'difficulty',
													'value': [[1, 30], [2, 50], [3, 100], [4, 56], [5, 33]]
												},
												{
													'name': 'Trainer',
													'class': 'trainer',
													'value': [['Female', 11], ['Male', 150], ['Both', 161]]
												},
												{
													'name': 'Body Focus',
													'class': 'body_focus',
													'value': [['Upper', 11], ['Core', 150], ['Lower', 161], ['Total', 161]]
												},
												{
													'name': 'Training Type',
													'class': 'training_type',
													'value': [['HIIT', 11], ['Strength Training', 150], ['Pilates', 161], ['Cardiovaskular', 161], ['Yoga/Flexibility', 150], ['Low Impact', 161], ['Warm up/Cool Down', 161], ['Kettlebell', 150], ['Tonning', 161], ['Balance/Agility', 161], ['Plyometric', 150], ['Barre', 161]]
												},
												{
													'name': 'Equipment',
													'class': 'equipment',
													'value': [['No equipment', 11], ['Dummbell', 150], ['Mat', 161], ['Bench', 161], ['Exercise Band', 150], ['Jump Rope', 161], ['Kettlebell', 161], ['Medicine Ball', 150], ['Physio Ball', 161], ['Sandbag', 161]]
												},
											]
																						
		mainthis.mainFunction['startVideo'] = function (ev)
			{
				let elem = ev.currentTarget || ev.srcElement;
				let video = $(elem).parent().parent().find('video');
				
				$(video)[0].controls = true;
				$(video)[0].play();
				$(elem).parent().find('.info_title1').animate({bottom: '-70px'}, 500);
				$(elem).parent().find('.abs_like').animate({bottom: '-30px'}, 500);
				$(elem).hide();
				
				let vid = document.getElementById("workout_video");
				vid.onpause = function() {
					$(video)[0].controls = false;
					$(elem).parent().find('.info_title1').animate({bottom: '0px'}, 500);
					$(elem).parent().find('.abs_like').animate({bottom: '16px'}, 500, function(){ $(elem).show(); });
				}; 
			}
		
		mainthis.mainFunction['openDashboard'] = function ()
			{
				mainthis.navCtrl.setRoot(DashboardPage);
				mainthis.navCtrl.popToRoot();
			}
		
		mainthis.mainFunction['openComponent'] = function (pg)
			{
				$('page-recepies .recepies').removeClass('active');
				$('page-recepies .recepies.'+pg).addClass('active');
			}
		
	}
	
	openDashboard()
		{
			this.navCtrl.setRoot(DashboardPage);
			this.navCtrl.popToRoot();
		}

}
