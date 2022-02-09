import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Authentication/Services/auth-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    
  }

  public logout() {
    this.authService.logout()
  }
}
