import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor(
    public router:Router,
  ){}

  goToMainPage(){
    this.router.navigate(['users', 10,'natali'],{
      queryParams:{
        age: 18
      },
      fragment:'Section1'
    })
  }
}
