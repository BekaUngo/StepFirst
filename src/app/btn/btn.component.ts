import { Component } from '@angular/core';
import { Person } from 'src/interfaces/person';
import { ListNumber } from 'src/interfaces/person';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {

  myName:string = "gio";
  myAge:number = 29;
  totalString:string;
  userInputText:string='';
  myStudent:Person = {
    name:'anri',
    age:20,
    isStudent:true
  }
  imgUrl:string='https://www.ama-assn.org/sites/ama-assn.org/files/2024-04/2024-03-26-CLIMATEWISH-index-1170x780.jpg'

  increaseMyAge(age:number){

    this.totalString = `my name is ${this.myName} and my age is ${age}`
 
  }

  myRowNumber = ListNumber.second
  


}
