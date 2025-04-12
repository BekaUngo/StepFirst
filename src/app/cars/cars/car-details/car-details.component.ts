import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  @Input() infoToChild
  @Output() carData = new EventEmitter<any>()

  showPrice(model){
    this.carData.emit(model)
  }
}
