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
var ProductComponent = (function () {
    function ProductComponent() {
        this.pageTitle = "produCT dashboard";
        this.imageWidth = 100;
        this.imageHeight = 100;
        this.imageVisible = true;
        this.color = "red";
        this.slice = 3;
        this.display = 4;
        this.products = [
            { logo: 'images/baby.jpg', id: 1, name: 'laptop', price: 3000, quantity: 20, date: new Date('08/20/2017'), rate: 5 },
            { logo: 'images/baby4.jpg', id: 2, name: 'iphone', price: 4000, quantity: 10, date: new Date('08/10/2017'), rate: 4 },
            { logo: 'images/baby2.jpg', id: 3, name: 'ipod', price: 5000, quantity: 14, date: new Date('08/27/2017'), rate: 3 },
            { logo: 'images/baby3.jpg', id: 4, name: 'projector', price: 6000, quantity: 5, date: new Date('08/3/2017'), rate: 2 },
        ];
        this.uName = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("john smith");
            }, 2000);
        });
    }
    ProductComponent.prototype.imageStatus = function () {
        this.imageVisible = !this.imageVisible;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: "product",
        templateUrl: "app/products/products.components.html",
        styleUrls: ['app/products/products.components.css'],
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map