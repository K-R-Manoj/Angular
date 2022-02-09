import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {AuthenticationGuard }from './Core/Guards/Auth/authentication.guard'
const routes: Routes = [
  {path:'', redirectTo:'callback', pathMatch:'full'},
  {path:'home', component:HomePageComponent, canActivate:[AuthenticationGuard]},
  {path:'**',redirectTo:'callback'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
