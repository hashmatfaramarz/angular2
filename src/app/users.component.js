"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_service_1 = require("./services/users.service");
var UserComponent = (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.post = 123;
        this.name = "laptop";
        this.name1 = "laptop";
        this.pageTitle = "user Dashboard";
        this.logo = "images/baby.jpg";
        this.btnStatus = false;
        this.divStatus = true;
        this.users = ["chetan", "peter", "sunny", "sunit"];
        this.userName = this._userService.getUser();
    }
    UserComponent.prototype.userInfo = function (para) {
        console.log("user info is running" + para);
    };
    UserComponent.prototype.mouseover = function (name) {
        this.name = 'Mac';
    };
    UserComponent.prototype.mouseup = function (name) {
        this.name = 'Laptop';
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: "users",
        //providers:[UserService],
        template: "\n        <h1 class=\"text-center\">{{ pageTitle }}</h1>\n        <h1>interpolation binding</h1>\n        <img style=\"width:300px\" src={{logo}} />  \n        <button class=\"btn btn-primary\"\n        disabled={{btnStatus}}>interpolation\n        </button>\n        <h1>Porperty Binding</h1>\n        <img style=\"width:300px\" [src]=\"logo\" [title]=\"name\" />\n        \n        <button class=\"btn btn-primary\"\n        [disabled]=btnStatus>property\n        </button>\n        <h1>Event Binding</h1>\n        <h3>{{name}}</h3>\n        <img style=\"width:300px\" [src]=\"logo\" [title]=\"name\" (mouseover)=\"mouseover()\"\n        (mouseleave)=\"mouseup()\"/>\n        <button class=\"btn btn-success\" (click)=\"userInfo('ok')\">\n        Evnt binding\n        </button>\n        <h1>two way data binding</h1>\n        post status: <input type=\"text\" [(ngModel)]=\"post\"/>\n        <p>{{post}}</p>\n        <h3>Structural directive</h3>\n        <div *ngIf=\"divStatus\">this is a test div</div>\n        <div>\n            <h3>ngfor directive</h3>\n            <ul>\n                <li *ngFor=\"let user of users\">{{user}}</li>\n            </ul>\n            \n        </div>\n\n        <h1>{{userName}}</h1>\n\n    "
    }),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=users.component.js.map