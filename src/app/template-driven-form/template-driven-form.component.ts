import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  @ViewChild('myForm') _myForm:NgForm
  @ViewChild('heading') _heading:HTMLElement

  submitMyForm(){
    console.log(this._myForm)
    this._myForm.reset()
  }

  checkInput(data){
    console.log(data)
  }
}
