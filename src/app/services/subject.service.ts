import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";



@Injectable({
    providedIn:'root'
})
export class SubjectService {

    test = of(1, 2, 3, 4)


    newTest = new Observable((observer)=>{
        observer.next(Math.random());
        observer.complete()
    })

    randomObs():Observable<number>{

        const randomValue = Math.random()

        return new Observable(observer=>{
            observer.next(randomValue);
            observer.complete()
        })
    }

    randomSubject = new Subject<number>()

    emitSubject(){
        this.randomSubject.next(Math.random())
    }

    listenSubject():Observable<number>{
        return this.randomSubject.asObservable()
    }


}


//Observable vs Subject = ორივე Observable
//Subject-ის დროს ჩვენ თვითონ მანუალურად შეგვიძლია მნიშვნელობის მიწოდება
//Subject-ის მოსმენის დროს ყველა მომსმენს მისდის ერთი და იგივე მნიშვნელობა
//Observable-ის შემთხვევასი ერთი და იგივე მნიშნველობა არ მიდის.