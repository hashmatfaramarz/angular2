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
var RatingComponent = (function () {
    function RatingComponent() {
        this.currentRating = new core_1.EventEmitter();
        // @Output()
        // currentRating = new EventEmitter<number>();
        // ratingCheck(pRating:number) {
        //     this.currentRating.emit(pRating);
        // }    
    }
    RatingComponent.prototype.ratingCheck = function (pRating) {
        this.currentRating.emit({ pRating: pRating, city: "Delhi" });
    };
    return RatingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RatingComponent.prototype, "pRating", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RatingComponent.prototype, "pQuantity", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "currentRating", void 0);
RatingComponent = __decorate([
    core_1.Component({
        selector: "rating",
        templateUrl: "app/rating/rating.component.html",
    })
], RatingComponent);
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map