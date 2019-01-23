import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Scroll, Events } from 'ionic-angular';
import * as $ from 'jquery';

import { DashboardPage } from '../dashboard/dashboard';

import { WorkoutIndexComponent } from '../../components/workout-index/workout-index';
import { WorkoutDetailsComponent } from '../../components/workout-details/workout-details';
/**
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})



export class WorkoutPage {
	@ViewChild(Scroll) scroll: Scroll;
	@ViewChild(WorkoutIndexComponent) workout_index: WorkoutIndexComponent
	@ViewChild(WorkoutDetailsComponent) workout_details: WorkoutDetailsComponent
	 
	mainModel: any = [];
	mainFunction: any = [];
	 
	 constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
	  }

	  ionViewDidLoad() {
		
		let mainthis = this;
		
		mainthis.workout_index.mainModel = mainthis.mainModel;
		mainthis.workout_index.mainFunction = mainthis.mainFunction;
		
		mainthis.workout_details.mainModel = mainthis.mainModel;
		mainthis.workout_details.mainFunction = mainthis.mainFunction;
		
		$('.training').addClass('active'); 
		
		mainthis.workout_index.mainFunction['openPage'] = function (th)
			{
				$('page-workout .workout').removeClass('active');
				$('page-workout .'+th).addClass('active');
			}
			
		mainthis.mainFunction['openDrop'] = function (pg)
			{
				$('page-workout .'+pg).addClass('active');
			}
			
		mainthis.mainFunction['closeDrop'] = function (pg)
			{
				$('page-workout .'+pg).removeClass('active');
			}
			
		mainthis.mainFunction['checkCheckbox'] = function (ev)
			{
				let elem = ev.currentTarget || ev.srcElement;
				$(elem).toggleClass('active');
				
				window['gajax']('search/workoutsearch', { },  function(data, status, xhr)
					{
						
					});
			}				

		console.log(mainthis.mainModel['workout_list']);
		
		mainthis.mainModel['loadedImg'] = false;
		mainthis.mainFunction['doSomething'] = function(i)
			{
				console.log('doSoemthing');
				mainthis.mainModel['workout_list'][i]['loaded'] = 1;
			}		
			
		mainthis.mainModel['workout_info'] = [];
		mainthis.mainModel['related_abs_width'] = 0;
		mainthis.mainFunction['openWorkout'] = function(mod)
			{
				$('page-workout .workout').removeClass('active');
				$('page-workout .workout_details').addClass('active');
				let video = mod['video_link'];
				let poster = mod['image'];
				let name = mod['name'];
				let like = mod['like'];
				let templateWorkout = '<video id="workout_video" width="100%" height="auto" preload="auto" poster="'+poster+'">'+
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
										
				$('#for_workout_details').html(templateWorkout);
				mainthis.mainModel['workout_info'] = mod;
				
				console.log(mainthis.mainModel['workout_info']);
				mainthis.mainModel['related_abs_width'] = mainthis.mainModel['workout_info']['related_workout'].length * 200;
				$.each(mainthis.mainModel['workout_info']['coments'],function(a,b)
					{
						let today_date = new Date();
						let today_miliseconds = today_date.getTime();
						let coments_time = parseInt(b['time']);
						
						console.log(new Date(parseInt(b['time'])));
						
						let one_day = 86400000;
						if ( today_miliseconds < coments_time + one_day)
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = 'today';
							}
						else if ( today_miliseconds > coments_time + one_day &&  today_miliseconds < coments_time + 2*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = 'yesterday';
							}
						else if ( today_miliseconds > coments_time + 2*one_day &&  today_miliseconds < coments_time + 7*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '2 days ago';
							}
						else if ( today_miliseconds > coments_time + 7*one_day &&  today_miliseconds < coments_time + 14*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '1 week ago';
							}
						else if ( today_miliseconds > coments_time + 14*one_day &&  today_miliseconds < coments_time + 30.4*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '2 week ago';
							}
						else if ( today_miliseconds > coments_time + 30.4*one_day &&  today_miliseconds < coments_time + 3*30.4*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '1 month ago';
							}
						else if ( today_miliseconds > coments_time + 3*30.4*one_day &&  today_miliseconds < coments_time + 6*30.4*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '3 months ago';
							}
						else if ( today_miliseconds > coments_time + 6*30.4*one_day &&  today_miliseconds < coments_time + 12*30.4*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '6 months ago';
							}
						else if ( today_miliseconds > coments_time + 12*30.4*one_day &&  today_miliseconds < coments_time + 24*30.4*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '1 year ago';
							}
						else if ( today_miliseconds > coments_time + 12*30.4*one_day &&  today_miliseconds < coments_time + 24*30.4*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '1 year ago';
							}
						else if ( today_miliseconds > coments_time + 24*30.4*one_day )
							{
								mainthis.mainModel['workout_info']['coments'][a]['days_ago'] = '2 year ago';
							}	
					});
					
				$('#for_workout_details').click(function(ev){
				if ( $('.btn_play').is(":hidden") )
					{
						let elem = ev.currentTarget || ev.srcElement;
						let video = $(elem).find('video');
						let vid = document.getElementById("workout_video");
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
				});		
					
			}		
			
		mainthis.mainFunction['openRelatedWorkout'] = function(id)
			{
				console.log(mainthis.mainModel['workout_list']);
				$.each(mainthis.mainModel['workout_list'], function(a, b)
					{
						/* if ( b['id'] == id )
							{
								mainthis.mainFunction['openWorkout'](b);
							} */
					});
				
				console.log(id);
			}			
			
		mainthis.mainFunction['openDropBottom'] = function(ev)
			{
				let elem = ev.currentTarget || ev.srcElement;
				if ( $(elem).parent().find('.drop_open').hasClass('active') )
					{
						$('page-workout .all_filter .drop_open').removeClass('active');
					}
				else
					{
						$('page-workout .all_filter .drop_open').removeClass('active');
						$(elem).parent().find('.drop_open').addClass('active');
					}
			}
			
		mainthis.mainModel['workout_list'] = window['workout_list'];
		
		
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
											
		console.log(window['filter_list']);									
		mainthis.mainModel['filter_list']= window['filter_list'];	

		console.log(mainthis.mainModel['filter_list']);	
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
				$('page-workout .workout').removeClass('active');
				$('page-workout .workout.'+pg).addClass('active');
			}
		
	  }
  
	openDashboard()
		{
			this.navCtrl.setRoot(DashboardPage);
			this.navCtrl.popToRoot();
		}
  
}
