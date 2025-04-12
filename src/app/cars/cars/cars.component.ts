import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  carsObject = [
    {
      name: 'Mercedes',
      id: 1,
      models: [
        {
          modelId: 10,
          modelName: 'W210',
          year: 2000,
          price: 5000,
        },
        {
          modelId: 11,
          modelName: 'W211',
          year: 2003,
          price: 8000,
        },
        {
          modelId: 12,
          modelName: 'W212',
          year: 2010,
          price: 9000,
        },
        {
          modelId: 13,
          modelName: 'W213',
          year: 2016,
          price: 12000,
        },
      ],
    },
    {
      name: 'BMW',
      id: 2,
      models: [
        {
          modelId: 20,
          modelName: 'E39',
          year: 1998,
          price: 2000,
        },
        {
          modelId: 21,
          modelName: 'E60',
          year: 2005,
          price: 4500,
        },
        {
          modelId: 22,
          modelName: 'F10',
          year: 2010,
          price: 11000,
        },
        {
          modelId: 23,
          modelName: 'F90',
          year: 2016,
          price: 22000,
        },
      ],
    },
    {
      name: 'Audi',
      id: 3,
      models: [
        {
          modelId: 30,
          modelName: 'S4',
          year: 2008,
          price: 3000,
        },
        {
          modelId: 31,
          modelName: 'S5',
          year: 2013,
          price: 10000,
        },
        {
          modelId: 32,
          modelName: 'S8',
          year: 2016,
          price: 25000,
        },
        {
          modelId: 33,
          modelName: 'RS7',
          year: 2024,
          price: 55000,
        },
      ],
    },
  ];
  groupIndex:number = 0
  infoToChild = this.carsObject[0]
  selectedCar;
  selectedGroup;

  chooseCar(index){
    this.groupIndex = index
    this.infoToChild = this.carsObject[index]
  }

  showCarInfo(data){
    console.log(data)
    this.selectedCar = data
    this.selectedGroup = this.carsObject.find((value)=>{
      return value.models.find(value=>value.modelId === data.modelId)
    })
    console.log("group",this.selectedGroup)
  }
}
