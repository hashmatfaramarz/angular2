"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var users_component_1 = require("./users.component");
var product_component_1 = require("./products/product.component");
var dashboard_component_1 = require("./dashboards/dashboard.component");
var userprofile_component_1 = require("./dashboards/userprofile.component");
var adduser_component_1 = require("./dashboards/adduser.component");
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: users_component_1.UserComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'userProfile/:id', component: userprofile_component_1.UserProfileComponent },
    { path: 'adduser', component: adduser_component_1.AddUserComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map