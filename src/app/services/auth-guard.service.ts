import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private router:Router
    ){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let isAuthorized =  this.authService.getIsAuthorized()
        if(isAuthorized){
            return true
        } else {
            this.router.navigate(['**'])
            return false
        }
    }

}