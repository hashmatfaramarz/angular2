import {Component} from '@angular/core';
import {UserService} from './services/users.service';
@Component({
    selector:"users",
    //providers:[UserService],
    template:`
        <h1 class="text-center">{{ pageTitle }}</h1>
        <h1>interpolation binding</h1>
        <img style="width:300px" src={{logo}} />  
        <button class="btn btn-primary"
        disabled={{btnStatus}}>interpolation
        </button>
        <h1>Porperty Binding</h1>
        <img style="width:300px" [src]="logo" [title]="name" />
        
        <button class="btn btn-primary"
        [disabled]=btnStatus>property
        </button>
        <h1>Event Binding</h1>
        <h3>{{name}}</h3>
        <img style="width:300px" [src]="logo" [title]="name" (mouseover)="mouseover()"
        (mouseleave)="mouseup()"/>
        <button class="btn btn-success" (click)="userInfo('ok')">
        Evnt binding
        </button>
        <h1>two way data binding</h1>
        post status: <input type="text" [(ngModel)]="post"/>
        <p>{{post}}</p>
        <h3>Structural directive</h3>
        <div *ngIf="divStatus">this is a test div</div>
        <div>
            <h3>ngfor directive</h3>
            <ul>
                <li *ngFor="let user of users">{{user}}</li>
            </ul>
            
        </div>

        <h1>{{userName}}</h1>

    `
})
export class UserComponent{
    post:number=123;
    name:string = "laptop";
    name1:string = "laptop";
    pageTitle:string="user Dashboard";
    logo:string = "images/baby.jpg";
    btnStatus:boolean=false;
    divStatus:boolean=true;


    users:string[]=["chetan","peter","sunny","sunit"];
    userName:string;
    constructor(private _userService:UserService) {
       this.userName = this._userService.getUser();
    }
    userInfo(para:string) {
        console.log("user info is running"+para);
    }
    mouseover(name:string) {
        this.name = 'Mac'; 
    }
    mouseup(name:string) {
        this.name = 'Laptop';
    }
}