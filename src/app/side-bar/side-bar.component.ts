import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {


  sideBarList = [
    {
      name:'მობილური',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ed60KbWxvicRlDdBVf83Q82MaMCgUl-7gQ&s',
      id:1,
      iconUrl:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg'
    },
    {
      name:'ტაბები',
      imgUrl:null,
      id:2,
      iconUrl:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg'
    },
    {
      name:'ლეპტოპი',
      imgUrl:'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
      id:3,
      iconUrl:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg'
    },
    {
      name:'აუდიო',
      imgUrl:null,
      id:4,
      iconUrl:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg'
    },
    {
      name:'გეიმინგი',
      imgUrl:null,
      id:5,
      iconUrl:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg'
    },
    {
      name:'ფოტო/ვიდეო',
      imgUrl:null,
      id:6,
      iconUrl:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg'
    },
  ]

  singleData;
  hasPhoto:boolean = false
  randomNumber:number;

  catchData(data){
    console.log(data)
    this.singleData = data
  }

  listenToEmit(data:boolean){
    this.hasPhoto = data
  }

  toggleVariable(){
    this.hasPhoto = !this.hasPhoto
    this.randomNumber = Math.round(Math.random()*10)
    console.log(this.randomNumber)
  }

}

//სტრუქტურული დაირექტივები
//*ngIf else, ng-template, *ngFor, 
//ატრიბუტ დაირექტივებს  
//ngClass, ngStyle
//ngClass - ამატებს კლასს კონკრეტული პირობის მიხედვით
//ngStyle - უშუალოდ სტილს ამატებს კონკრეტული პირობის მიხედვით