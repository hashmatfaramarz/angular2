import {Component,OnInit} from '@angular/core';
import { UserService } from "../services/users.service";
@Component({
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    pageTitle:string="Dashboard Title";
    users:string;
    constructor(private _uService:UserService) {
        // this._uService.getAllUsers()
        // .subscribe((data)=>this.users=data);
    }
    ngOnInit() {
         this._uService.getAllUsers()
        .subscribe((data)=>this.users=data);
    }
}