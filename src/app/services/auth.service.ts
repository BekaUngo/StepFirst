import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class AuthService {

    isAuthorized:boolean = false

    login(){
        this.isAuthorized = true
        console.log('isAuthorized', this.isAuthorized)
    }

    logout(){
        this.isAuthorized = false
        console.log('isAuthorized', this.isAuthorized)
    }

    getIsAuthorized(){
        return this.isAuthorized
    }

}