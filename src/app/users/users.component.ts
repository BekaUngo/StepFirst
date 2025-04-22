import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user:{id:string,name:string};
  filterId:number
  randomId:number;
  randomAge:number;
  myFragment;

  constructor(
    public router:Router,
    public route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(result=>{
      this.user = {
        id:result['id'],
        name:result['name']
      }
    })

    this.route.queryParams.subscribe(data=>{
      this.filterId = data['age']
    })
    this.myFragment = this.route.snapshot.fragment
  }

  ShowUserDetailPage(id:number,name:string){
    this.router.navigate(['users', id, name],{
      queryParams:{date:'22'}
    })
  }


}
