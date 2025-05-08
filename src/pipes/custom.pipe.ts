import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'filterItems'
})
export class CustomPipe implements PipeTransform {
    
    transform(value: any, length:number) {
        if(!value){
            return 
        } else {
          return value.filter(x=>x.length > length)
        }
    }
}