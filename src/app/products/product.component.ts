import {Component} from '@angular/core';
@Component({
    selector:"product",
    templateUrl:"./products.components.html",
    styleUrls:['./products.components.css'],
    

})
export class ProductComponent {
    uName:Promise<any>;
    constructor() {
        this.uName = new Promise(function(resolve,reject){
            setTimeout(()=>{
                resolve("john smith")
            },2000);
        });
    }
    cRating:number;
    pageTitle:string="produCT dashboard";
    imageWidth:number=100;
    imageHeight:number=100;
    imageVisible:boolean=true;
    color:string="red";
    slice:number=3;
    display:number=4;

    products:any[]=[
        {logo:'images/baby.jpg', id:1, name:'laptop', price:3000, quantity:20, date:new Date('08/20/2017'),rate:5},
        {logo:'images/baby4.jpg', id:2, name:'iphone', price:4000, quantity:10, date:new Date('08/10/2017'),rate:4},
        {logo:'images/baby2.jpg', id:3, name:'ipod', price:5000, quantity:14, date:new Date('08/27/2017'),rate:3},
        {logo:'images/baby3.jpg', id:4, name:'projector', price:6000, quantity:5, date:new Date('08/3/2017'),rate:2},
    ];

    imageStatus() {
            this.imageVisible = !this.imageVisible;
    }
}