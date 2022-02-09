import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdServiceService {

  constructor() { }
  getToken()
  {
    return !!localStorage.getItem("Session User");
  }
}
