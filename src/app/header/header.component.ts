import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public route:Router,
    public authService: AuthService
  ){}

  loginBtn(){
    this.authService.login()
  }

  logoutBtn(){
    this.authService.logout()
  }

}
