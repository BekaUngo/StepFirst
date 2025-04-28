import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  showLogin:boolean = false;

  constructor(
    private loginService: LoginService
  ){}

  ngOnInit(): void {
    this.loginService.listenToLoginState().subscribe(value=>{
      this.showLogin = value
      console.log(value)
    })
  }

  closeLogin(){
    this.loginService.closeLoginPopup()
  }

}
