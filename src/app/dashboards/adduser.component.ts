import {Component} from '@angular/core';
import { UserService } from "../services/users.service";
import { Router } from "@angular/router";
@Component({
    templateUrl:"./adduser.component.html"
})
export class AddUserComponent{
    pageTitle:string="add user";
    constructor(private _uService:UserService, private _router:Router) {

    }
    addUser(user:any) {
        this._uService.addUserService(user)
        .subscribe(()=>this._router.navigate(["/dashboard"]))
    }
}