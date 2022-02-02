import { Pipe, PipeTransform } from '@angular/core';
import { ReciveNotes } from '../Models/recive-notes';

@Pipe({
  name: 'search',

})
export class SearchPipe implements PipeTransform {

  transform(value: ReciveNotes[], filtredString:string): any {

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
