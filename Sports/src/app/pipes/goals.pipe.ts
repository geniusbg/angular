import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goals'
})
export class GoalsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
   console.log(value)
    return value;
  }

}
