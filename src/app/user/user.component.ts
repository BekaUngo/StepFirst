import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  userName:string;
  userId:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(result=>{

      this.userId = result['id']
      this.userName = result['name']
    })
  }

  navigateToEdit(){
    this.router.navigate(['users/edit', this.userId, this.userName],{
      queryParams:{rain:true},
      queryParamsHandling:'merge'
    })
  }

}
