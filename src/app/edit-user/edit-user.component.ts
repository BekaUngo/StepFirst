import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit{

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      console.log(data)
    })
  }
}
