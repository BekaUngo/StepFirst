import { Component } from '@angular/core';
import { interval, map } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent {

  userName:string = "beka ungiadze"
  score:number = 1.34572
  minScore = interval(1000).pipe(
    map(()=>new Date())
  )

  nameArr:string[] = [
    'beka',
    'aleksa',
    'gio',
    'bekusha',
    'dali',
    'natali'
  ]




}
