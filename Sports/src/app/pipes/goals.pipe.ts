import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goals'
})
export class GoalsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.split(';')
    value.forEach(element => {
      element = element + '\n'
      console.log(element)
    });
    return value;
  }

}
