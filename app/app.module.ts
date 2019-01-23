import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPage } from '../pages/forgot/forgot';
import { WorkoutPage } from '../pages/workout/workout';
import { CreateplanPage } from '../pages/createplan/createplan';
import { RecepiesPage } from '../pages/recepies/recepies';

import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer';
import { WorkoutIndexComponent } from '../components/workout-index/workout-index';
import { WorkoutDetailsComponent } from '../components/workout-details/workout-details';
import { RecepiesIndexComponent } from '../components/recepies-index/recepies-index';
import { RecepiesDetailsComponent } from '../components/recepies-details/recepies-details';

import { CreateplanIndexComponent } from '../components/createplan-index/createplan-index';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
	DashboardPage,
	SignupPage,
	ForgotPage,
	WorkoutPage,
	CreateplanPage,
	RecepiesPage,
	
	HeaderComponent,
	FooterComponent,
	WorkoutIndexComponent,
	WorkoutDetailsComponent,
	RecepiesIndexComponent,
	RecepiesDetailsComponent,
	
	CreateplanIndexComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage,
	DashboardPage,
	SignupPage,
	ForgotPage,
	WorkoutPage,
	CreateplanPage,
	RecepiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
