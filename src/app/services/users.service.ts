import {Injectable} from '@angular/core';
import { Http,Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do"

@Injectable()
export class UserService{

    constructor(private _http:Http) {

    }
    getUser():string{
        return "alex";
    }

    getAllUsers(){
         return this._http.get("http://localhost:81/usersApi/users.php")
        .map((res:Response)=>res.json())
        .do(data=>console.log(data))

    }

        getUserId(id:any){
         return this._http.get("http://localhost:81/usersApi/users.php?id="+id)
        .map((res:Response)=>res.json())
        .do(data=>console.log(data))

    }    
    addUserService(user:any) {
        return this._http.post("http://localhost:81/usersApi/users.php",user)
    }
}