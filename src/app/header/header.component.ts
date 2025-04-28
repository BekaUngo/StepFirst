import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TestService } from '../services/test.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  constructor(
    public route:Router,
    public authService: AuthService,
    public testService: TestService,
    public loginService: LoginService
  ){}

  loginBtn(){
    this.loginService.openLoginPopup()
  }

  logoutBtn(){
    this.loginService.closeLoginPopup()
  }

  increaseMyAge(){
    console.log("header",this.testService.showAge())
    this.testService.increaseMyAge()
  }

}
