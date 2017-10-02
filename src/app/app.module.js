"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var users_component_1 = require("./users.component");
var product_component_1 = require("./products/product.component");
var forms_1 = require("@angular/forms");
var custompipe_pipes_1 = require("./customPipes/custompipe.pipes");
var rating_component_1 = require("./rating/rating.component");
var customdirective_directive_1 = require("./customDirectives/customdirective.directive");
var home_component_1 = require("./home/home.component");
var routes_1 = require("./routes");
var users_service_1 = require("./services/users.service");
var dashboard_component_1 = require("./dashboards/dashboard.component");
var http_1 = require("@angular/http");
var userprofile_component_1 = require("./dashboards/userprofile.component");
var adduser_component_1 = require("./dashboards/adduser.component");
var credit_modul_1 = require("./creditModul/credit.modul");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes_1.routes), credit_modul_1.CreditModule],
        declarations: [app_component_1.AppComponent, users_component_1.UserComponent,
            product_component_1.ProductComponent, custompipe_pipes_1.UpperCasePipe, custompipe_pipes_1.searchPipe,
            custompipe_pipes_1.JSONPipe, rating_component_1.RatingComponent, customdirective_directive_1.CustomDirective, customdirective_directive_1.HideSomthing,
            home_component_1.HomeComponent, dashboard_component_1.DashboardComponent, userprofile_component_1.UserProfileComponent,
            adduser_component_1.AddUserComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [users_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map