import {Directive,ElementRef,HostListener} from '@angular/core';
@Directive({
    selector:'[highlight]'
})
export class CustomDirective {
    //Dependency injection
    constructor(private _EleRef:ElementRef) {
        //console.log(this._EleRef);
        //this._EleRef.nativeElement.style.backgroundColor="red";
    }
    @HostListener('mouseover')
    addEffect() {
        this.toggleEffect('red');
        // this._EleRef.nativeElement.style.backgroundColor="red";
    }

    @HostListener('mouseleave')
    removeEffect() {
        this.toggleEffect(null);
        // this._EleRef.nativeElement.style.backgroundColor="white";
    }
    toggleEffect(coloeName:string) {
        this._EleRef.nativeElement.style.backgroundColor=coloeName;
    }
}

@Directive({
    selector:'[hide]'
})
export class HideSomthing{
    constructor(private hideEl:ElementRef) {
        this.hideEl.nativeElement.style.display="none";
    }
}