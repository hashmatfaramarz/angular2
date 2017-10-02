import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './users.component';
import {ProductComponent} from './products/product.component';
import {DashboardComponent} from './dashboards/dashboard.component';
import { UserProfileComponent } from "./dashboards/userprofile.component";
import { AddUserComponent } from "./dashboards/adduser.component";

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'user', component:UserComponent},
    {path:'product',component:ProductComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'userProfile/:id',component:UserProfileComponent},
    {path:'adduser',component:AddUserComponent},
    {path:'**', redirectTo:'home', pathMatch:'full'},
  ]