import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor(
    public router:Router,
    public testService:TestService
  ){
    this.testData = this.testService.getArray()
  }

  testData:any

  goToMainPage(){
    this.router.navigate(['users'])
  }
}
