import { Component } from '@angular/core';
import { UserList } from 'src/interfaces/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userList:UserList[] = [
    { name:'ბექა უნგიაძე', id:1, decsription:'Step ლექტორი'},
    { name:'ანრი წოწონავა', id:2, decsription:'Step სტუდენტი ანრი'},
    { name:'შალვა მინდორაშვილი', id:3, decsription:'Step სტუდენტი შალვა'},
    { name:'ალექს მატარაძე', id:4, decsription:'Step სტუდენტი ალექსი'},
    { name:'ნატალი შანავა', id:5, decsription:'Step სტუდენტი ნატალი'},
    { name:'ნიკა ქობალია', id:6, decsription:'Step სტუდენტი ნიკა'},
    { name:'დავით შარაშენიძე', id:7, decsription:'Step სტუდენტი დავითი'},
  ]

  userDetailObject:UserList;
  inputBoolean:number;
  testNumber:number

  trackUserList(user){
    return user.id
  }

  selectUser(data:UserList){
    this.userDetailObject = data
    this.inputBoolean = data.id
  }

  listenChild(result:number){
    this.testNumber = result
  }

}
