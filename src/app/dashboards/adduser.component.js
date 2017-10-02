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
var users_service_1 = require("../services/users.service");
var router_1 = require("@angular/router");
var AddUserComponent = (function () {
    function AddUserComponent(_uService, _router) {
        this._uService = _uService;
        this._router = _router;
        this.pageTitle = "add user";
    }
    AddUserComponent.prototype.addUser = function (user) {
        var _this = this;
        this._uService.addUserService(user)
            .subscribe(function () { return _this._router.navigate(["/dashboard"]); });
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        templateUrl: "app/dashboards/adduser.component.html"
    }),
    __metadata("design:paramtypes", [users_service_1.UserService, router_1.Router])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=adduser.component.js.map