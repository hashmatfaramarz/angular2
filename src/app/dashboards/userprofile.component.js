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
var router_1 = require("@angular/router");
var users_service_1 = require("../services/users.service");
var common_1 = require("@angular/common");
var UserProfileComponent = (function () {
    function UserProfileComponent(_route, _uProfile, _router, _location) {
        var _this = this;
        this._route = _route;
        this._uProfile = _uProfile;
        this._router = _router;
        this._location = _location;
        this.pageTitle = "user profile";
        this.userId = this._route.snapshot.params.id;
        this._uProfile.getUserId(this.userId)
            .subscribe(function (data) { return _this.user = data; });
        //console.log(this._route);
    }
    //navigation to dashboard
    UserProfileComponent.prototype.goDashboard = function () {
        this._router.navigate(['/dashboard']);
    };
    //move to last visited page
    UserProfileComponent.prototype.goBack = function () {
        this._location.back();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        templateUrl: "app/dashboards/userprofile.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, users_service_1.UserService,
        router_1.Router, common_1.Location])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userprofile.component.js.map