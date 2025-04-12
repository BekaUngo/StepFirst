import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar-details',
  templateUrl: './side-bar-details.component.html',
  styleUrls: ['./side-bar-details.component.scss']
})
export class SideBarDetailsComponent {
  @Input() singleData
  @Output() emitImgUrl = new EventEmitter<boolean>()

  hasImgUrl:boolean = false

  checkImg(){
    this.hasImgUrl = this.singleData.imgUrl !== null
    this.emitImgUrl.emit(this.hasImgUrl)
  }

}
