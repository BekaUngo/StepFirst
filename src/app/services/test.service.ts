import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { debounceTime, Observable, of, pipe } from "rxjs";
import { IBackendData } from "src/interfaces/backend";


//Reactive Exstension for JS = rxjs
//Observable
//rxjs operators:

    //of = of([1, 2, 3, 4])
    //from = [1, 2, 3, 4]
    //debounceTime(500) = 
    //distinctUntilChange() = სხვა მონაცემზე გაუშვებს subscribe-ს
    //switchMap()
    //mergeMap()
    //map
    //filter
    //fromEvent()
    //pipe()


@Injectable({
    providedIn:'root'
})
export class TestService {

    constructor(
        private http:HttpClient
    ){}

    userText:string = ''

    newData = of(1, 2, 3, 4).pipe(
        debounceTime(1000)
    )

    data = new Observable(observer=>{
        observer.next(1)
        observer.next(2)
        observer.next(3)
        observer.complete()
    })

    getProducts(){
        // return this.http.get(this.url)
    }

    searchMethod(){
        const url = `https://api.everrest.educata.dev/shop/products/search?keywords=${this.userText}`
        return this.http.get(url)
    }

    registerUser(body:IBackendData){
        return this.http.post('www.zz', body)
    }


    myAge:number = 0;
    myArray = [
        {
            name:'beka',
            age:29
        },
        {
            name:'gio',
            age:18
        },
        {
            name:'saba',
            age:24
        },
    ]

    filterArray(){
        this.myArray = this.myArray.filter(value=>{
            return value.age > 25
        })

    }

    getArray(){
        return this.myArray
    }

    increaseMyAge(){
        this.myAge++
    }

    descreaseMyAge(){
        this.myAge--
    }

    showAge(){
        return this.myAge
    }

}