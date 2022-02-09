import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _http:HttpClient) { }

  private constructQueryParam(query:{[key:string]:any})
  {
    return Object.entries(query)
              .filter(([,value])=> typeof value !== 'undefined')
              .map(([key,value])=>{
                if(Array.isArray(value) && value.length)
                {
                  return value
                          .filter(v => typeof v!== 'undefined')
                          .map(v=>`${key}[]=${v}`)
                          .join('&');
                }
                return `${key}=${value}`
              })
              .reduce((a,b)=>`${a}&${b}`)
  }

  public async Logout()
  {
    console.log("Logout Clicked");
    const authorizationParams = await this.authorizationParams()
    console.log("this is authorization Params: ", authorizationParams);
    localStorage.removeItem('Session User');
    window.location.href = `https://todo-app-users.auth.us-east-1.amazoncognito.com/logout?${this.constructQueryParam(authorizationParams)}`;
  }

  private async authorizationParams()
  {
    return {
      client_id: '30qr4s2bfme2sv2lda73c3f0vh',
      response_type: 'code',
      scope: (['email', 'openid', 'profile', 'aws.cognito.signin.user.admin']).join('+'), //After added scope to get custom attribute, you need to give permission App client in Attribute read and write permissions(edit the permission)
      redirect_uri: 'http://localhost:4200/callback'
    }
  }

  public async authorizeUser()
  {
    const authorizationParams = await this.authorizationParams()
    window.location.href = `https://todo-app-users.auth.us-east-1.amazoncognito.com/oauth2/authorize?${this.constructQueryParam(authorizationParams)}`;
  }

  public intermediateServerLogin(Params:any):Observable<any>
  {
    return this._http.post('http://localhost:5000/authenticate',Params)
  }
}
