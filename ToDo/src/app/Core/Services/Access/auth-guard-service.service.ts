import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  constructor() { }

  public getToken()
  {
    return !!localStorage.getItem("Session User");
  }
}
