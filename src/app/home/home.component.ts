import {Component} from '@angular/core';
@Component({
    selector:'home',
    template:`
        <h2 class="text-center">{{homeTitle}}</h2>
        <my-credit></my-credit>
    `
})
export class HomeComponent{
    homeTitle:string="home page";
}