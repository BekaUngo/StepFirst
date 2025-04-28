import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class LoginService {

    loginState$ = new Subject<boolean>()

    openLoginPopup(){
        this.loginState$.next(true)
    }

    closeLoginPopup(){
        this.loginState$.next(false)
    }

    listenToLoginState():Observable<boolean>{
        return this.loginState$.asObservable()
    }

}


