import { Pipe, PipeTransform } from '@angular/core';
import { ReciveNotes } from '../Models/recive-notes';

@Pipe({
  name: 'sort',
 
})
export class SortPipe implements PipeTransform {

  transform(value: ReciveNotes[], propname:string, sortType:string): any {
    if(value)
    {
     if(propname==='Title' && sortType==='A-Z')
     {
       return value.sort((a:ReciveNotes,b:ReciveNotes)=>{
         if(a[propname].toLowerCase()>b[propname].toLowerCase())
         {
           return 1;
         }
         else
         {
           return -1;
         }
       })
     }
     if(propname==='Title' && sortType==='Z-A')
     {
       return value.sort((a:ReciveNotes,b:ReciveNotes)=>{
         if(a[propname].toLowerCase()<b[propname].toLowerCase())
         {
           return 1;
         }
         else
         {
           return -1;
         }
       })
     }
      
      if(propname==='Time'&& sortType==='Oldest')
      {
        return value.sort((a:ReciveNotes,b:ReciveNotes)=>{
          if(new Date(a[propname]) > new Date(b[propname]))
          {     
            return 1;
          }
          else
          {
            return -1
          }
        })
      }
      if(propname==='Time'&& sortType==='Newest')
      {
        return value.sort((a:ReciveNotes,b:ReciveNotes)=>{
          if(new Date(a[propname]) < new Date(b[propname]))
          {
            return 1;
          }
          else
          {
            return -1
          }
        })
      }
    }
  }

}
