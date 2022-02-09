import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.listenParamsT();
  }

  private listenParamsT()
  {
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params ,"this is listenparamsT");
      this.validateCode(params)
    })
  }

  private validateCode({code}:{code:any})
  {
    if(code)
    {
      const params = {
        code,
      };

      this.authService.intermediateServerLogin(params).subscribe((res:any)=>{
        console.log(res);
        const loginInfo = {...res};
        console.log("this is loginInfo", loginInfo);
        if(loginInfo.userDetails.body.error==='invalid_token')
        {
          this.authService.logout()
        }
        else
        {

          this.router.navigateByUrl('home')
        }
      },
      // ()=>{
      //   this.authService.logout()
      // }
      );

      // console.log(code);
      
    }
    else
    {
      this.authService.authorizeUser()
    }
  }

}
