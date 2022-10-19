import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'filter'
})
export class FilterPipe implements PipeTransform{

  transform(list: any[], field: string,value:string): any {
    if(list.length == 0)
      return [];
    if(!value)
      return list;

    return list.filter(val => val[field].toLowerCase().includes(value.toLowerCase()));
  }

}
