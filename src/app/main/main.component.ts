import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
import { test } from 'src/interfaces/backend';
import { debounceTime } from 'rxjs';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{


  constructor(
    public router:Router,
    public testService:TestService,
    public subjectService: SubjectService
  ){
    this.testData = this.testService.getArray()
  }

  testData:any
  dataFromBack:Array<test> = [];
  inputText:string


  ngOnInit(): void {

    this.subjectService.newTest.subscribe(value=>{
      console.log(value)
    })
    
    // this.subjectService.randomObs().subscribe(value=>{
    //   console.log('subscriber 1', value)
    // })
    // this.subjectService.randomObs().subscribe(value=>{
    //   console.log('subscriber 2', value)
    // })

    // this.subjectService.listenSubject().subscribe(value=>{
    //   console.log('Subject 1', value)
    // })
    // this.subjectService.listenSubject().subscribe(value=>{
    //   console.log('Subject 2', value)
    // })

    // this.subjectService.emitSubject()
  }

  searchText(input:any){
    this.testService.userText = this.inputText
    // console.log(this.testService.userText)
    setTimeout(()=>{
      this.testService.searchMethod().pipe(debounceTime(2000)).subscribe(value=>{
        console.log(value)
      })
    },)
  }


  goToAboutUsPage(){
    this.router.navigate(['about-us'])
  }

}
