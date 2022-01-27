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
      
      if(propname==='createdAt'&& sortType==='Oldest')
      {
        return value.sort((a:ReciveNotes,b:ReciveNotes)=>{
          if(new Date(a[propname]).toLocaleString() > new Date(b[propname]).toLocaleString())
          {     
            return 1;
          }
          else
          {
            return -1
          }
        })
      }
      if(propname==='createdAt'&& sortType==='Newest')
      {
        return value.sort((a:ReciveNotes,b:ReciveNotes)=>{
          if(new Date(a[propname]).toLocaleString() < new Date(b[propname]).toLocaleString())
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
