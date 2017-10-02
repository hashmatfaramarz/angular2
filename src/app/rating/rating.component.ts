import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector:"rating",
    templateUrl:"./rating.component.html",

})
export class RatingComponent {
    @Input()
    pRating:number;

    @Input()
    pQuantity:number;

    @Output()
    currentRating = new EventEmitter<Object>();
    ratingCheck(pRating:number) {
        this.currentRating.emit({pRating:pRating, city:"Delhi"});
    }
    // @Output()
    // currentRating = new EventEmitter<number>();

    // ratingCheck(pRating:number) {
    //     this.currentRating.emit(pRating);
    // }    
}