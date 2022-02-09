import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/authentication/Services/auth-service.service';
import { AuthGuardServiceService } from '../../Services/Access/auth-guard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardGuard implements CanActivate {
  constructor(private AuthGaurdService :AuthGuardServiceService, private router:Router, private authenticationservice:AuthServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.AuthGaurdService.getToken())
    {
      this.authenticationservice.Logout()
    }
    return this.AuthGaurdService.getToken()
  }
  
}
