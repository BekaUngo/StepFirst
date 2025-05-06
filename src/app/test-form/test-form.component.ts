import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBackendData } from 'src/interfaces/backend';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit{


    myForm:FormGroup
    requiredError:string = 'აუცილებელი ველია'
    emailError:string = 'შეიყვანე მეილის ფორმატით'
    dataForBackend:IBackendData = {
      userEmail:null,
      userName:null,
      lastName:null
    }
    myName:string
  
    constructor(
      private testService:TestService,
      private route:ActivatedRoute
    ){
  
    }
  
    ngOnInit(): void {
      this.route.queryParams.subscribe(value=>{
        this.myName = value['name']
      })
      this.initializeForm()
      this.myForm.valueChanges.subscribe(value=>{
        console.log(value)
      })
    }
  
    initializeForm(){
      this.myForm = new FormGroup({
        'userData':new FormGroup({
          'userName': new FormControl(this.myName,Validators.required),
          'lastName': new FormControl(null),
        }),
        'userEmail': new FormControl(null,[Validators.required,Validators.email]),
        'myHobbies': new FormArray([])
      })
    }
  
    onSubmit(){
      console.log((this.myForm.get('userData') as FormGroup).controls['userName'].value)
      this.dataForBackend.userName = (this.myForm.get('userData') as FormGroup).controls['userName'].value
      this.dataForBackend.lastName = (this.myForm.get('userData') as FormGroup).controls['lastName'].value
      this.dataForBackend.userEmail = this.myForm.controls['userEmail'].value
  
      this.testService.registerUser(this.dataForBackend).subscribe(value=>{
        console.log(value)
      })
      console.log(this.dataForBackend)
      this.myForm.reset()
    }
  
    addHobby(){
      (<FormArray>this.myForm.controls['myHobbies']['controls']).push(new FormControl(null))
      console.log(this.myForm)
    }
  
    setFormValues(){
      this.myForm.setValue({
        userData:{
          userName:'beka',
          lastName:'ungiadze'
        },
        userEmail:'beqaungiadze@gmail.com',
        myHobbies:[]
      })
      // this.myForm.patchValue({
      //   userEmail:'beka@gmail.com'
      // })
    }
}
