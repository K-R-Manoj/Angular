import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {path:'', redirectTo:'callback', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'**',redirectTo:'callback'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
