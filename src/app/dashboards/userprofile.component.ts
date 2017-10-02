import {Component} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../services/users.service";
import {Location} from '@angular/common'
@Component({
    templateUrl:"./userprofile.component.html",
})
export class UserProfileComponent{
    pageTitle:string="user profile";
    userId:number;
    user:any;
    constructor (private _route:ActivatedRoute,private _uProfile:UserService
    ,private _router:Router, private _location:Location) {
        // this.userId=this._route.snapshot.params.id;
        this._uProfile.getUserId(2)
        .subscribe((data)=>this.user=data)
        
        //console.log(this._route);
    }
    //navigation to dashboard
    goDashboard() {
        this._router.navigate(['/dashboard']);
    }
    //move to last visited page
    goBack() {
        this._location.back();
    }
}