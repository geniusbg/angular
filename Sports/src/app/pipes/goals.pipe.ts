import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goals'
})
export class GoalsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.split(';').filter(el => {return el != ""})
    console.log(value)
    return value;
  }

}
