import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {UserComponent} from './users.component';
import {ProductComponent} from './products/product.component';
import {FormsModule} from '@angular/forms';
import {UpperCasePipe,searchPipe,JSONPipe} from './customPipes/custompipe.pipes';
import {RatingComponent} from'./rating/rating.component';
import {CustomDirective,HideSomthing} from'./customDirectives/customdirective.directive';
import {HomeComponent} from './home/home.component';
import {routes} from './routes';
import {UserService} from './services/users.service';
import {DashboardComponent} from './dashboards/dashboard.component'
import {HttpModule} from '@angular/http';
import {UserProfileComponent} from './dashboards/userprofile.component'
import {AddUserComponent} from './dashboards/adduser.component';
import { CreditModule } from "./creditModul/credit.modul";
@NgModule({

  imports: [ BrowserModule, FormsModule,HttpModule, RouterModule.forRoot(routes),CreditModule ],
  declarations: [ AppComponent,UserComponent,
  ProductComponent,UpperCasePipe,searchPipe,
   JSONPipe,RatingComponent,CustomDirective,HideSomthing
   ,HomeComponent, DashboardComponent,UserProfileComponent,
   AddUserComponent ],
  bootstrap: [ AppComponent],
  providers:[UserService],
})
export class AppModule { }
