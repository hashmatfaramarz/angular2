import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'uppercasepipe'
})
export class UpperCasePipe implements PipeTransform{
    transform(data:string) {
        return data[0].toUpperCase()+ data.substr(1).toLowerCase();
    }
}

@Pipe({
    name:'search'
})
export class searchPipe implements PipeTransform {
    transform(data:string[],value:string) {
        let newProduct:any[]=[];
        if(value){
        data.forEach(function(product:any){
            if(product.name.match(value)) {
                newProduct.push(product);
            }
        })
        return newProduct;
    }
    else {
        return data;
     }
    }
}

//by default this pipe is pure
//and built in json is impure
@Pipe({
    name:'jsonPipe',
    pure:false
})
export class JSONPipe implements PipeTransform {
    transform(data:any) {
       return JSON.stringify(data);
    }
}