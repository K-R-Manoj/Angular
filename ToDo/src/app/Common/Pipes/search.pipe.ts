import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filtredString:string): any {

    if(value)
    {
      if(value.length === 0 || filtredString==='')
      {
        return value;
      }
      else
      {
        let resultArray = [];

        for(let item of value)
        {
          if(item.Title.toLowerCase().includes(filtredString.toLowerCase()))
          {
            resultArray.push(item);
          }
        }
        return resultArray
      }
    }
   
  }

}
