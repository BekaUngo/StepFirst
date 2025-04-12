import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserList } from 'src/interfaces/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent{
  @Input() userDetailObject:UserList
  @Input() inputBoolean:number = 10;
  @Output() numberEmit = new EventEmitter<number>()



  kvadratuliRicxvi:number;


  squareNumber(){
    this.kvadratuliRicxvi = Math.pow(this.inputBoolean,2)
    this.numberEmit.emit(this.kvadratuliRicxvi)
  }
}
