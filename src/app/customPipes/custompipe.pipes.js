"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UpperCasePipe = (function () {
    function UpperCasePipe() {
    }
    UpperCasePipe.prototype.transform = function (data) {
        return data[0].toUpperCase() + data.substr(1).toLowerCase();
    };
    return UpperCasePipe;
}());
UpperCasePipe = __decorate([
    core_1.Pipe({
        name: 'uppercasepipe'
    })
], UpperCasePipe);
exports.UpperCasePipe = UpperCasePipe;
var searchPipe = (function () {
    function searchPipe() {
    }
    searchPipe.prototype.transform = function (data, value) {
        var newProduct = [];
        if (value) {
            data.forEach(function (product) {
                if (product.name.match(value)) {
                    newProduct.push(product);
                }
            });
            return newProduct;
        }
        else {
            return data;
        }
    };
    return searchPipe;
}());
searchPipe = __decorate([
    core_1.Pipe({
        name: 'search'
    })
], searchPipe);
exports.searchPipe = searchPipe;
//by default this pipe is pure
//and built in json is impure
var JSONPipe = (function () {
    function JSONPipe() {
    }
    JSONPipe.prototype.transform = function (data) {
        return JSON.stringify(data);
    };
    return JSONPipe;
}());
JSONPipe = __decorate([
    core_1.Pipe({
        name: 'jsonPipe',
        pure: false
    })
], JSONPipe);
exports.JSONPipe = JSONPipe;
//# sourceMappingURL=custompipe.pipes.js.map