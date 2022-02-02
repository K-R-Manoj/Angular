import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { 
     
  }

  private constructQueryParam(query: { [key: string]: any }) {
    return Object.entries(query)
      .filter(([, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        if (Array.isArray(value) && value.length) {
          return value
            .filter((v) => typeof v !== 'undefined')
            .map((v) => `${key}[]=${v}`)
            .join('&');
        }
        return `${key}=${value}`;
      })
      .reduce((a, b) => `${a}&${b}`);
  }

  public async logout() {
    console.log("logout clicked");
    const authorizationParams = await this.getAuthorizationParams();
    console.log(authorizationParams);
    // window.location.href = `https://todo-app-users.auth.us-east-1.amazoncognito.com/logout?${this.constructQueryParam(authorizationParams)}`;
     
  }

  private async getAuthorizationParams() {
    return {
      client_id: '30qr4s2bfme2sv2lda73c3f0vh',
      response_type: 'code',
      redirect_uri: 'http://localhost:4200/callback'
    };
  }

  public async authorizeUser() {
    const authorizationParams = await this.getAuthorizationParams();
    // console.log(this.constructQueryParam(authorizationParams), "this is authorize params in authorize user")
    // console.log("this is authorize user");
    window.location.href = `https://todo-app-users.auth.us-east-1.amazoncognito.com/oauth2/authorize?${this.constructQueryParam(authorizationParams)}`;
  }

  public intermediateServerLogin(params:any):Observable<any>
  {
    return this.http.post('http://localhost:5000/authenticate',params)
  }
}