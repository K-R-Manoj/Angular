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
    this.listenParams()
  }
  private listenParams()
  {
    this.route.queryParams.subscribe((params:any)=>{
      console.log("this is login page params value : " , params);
      this.validateCode(params);  
    })
  }
  private validateCode({code}:{code:any})
  {
    if(code)
    {
      const params={ code };
      this.authService.intermediateServerLogin(params).subscribe((res:any)=>{
        console.log("this is intermediate server login response : ", res);
        const LoginInfo = {...res};
        console.log("this is LoginInfo value: ", LoginInfo);
        
        if(LoginInfo.userDetails.body.error === "invalid_token")
        {
          this.authService.Logout()
        }
        else
        {
          localStorage.setItem("Session User", LoginInfo.userDetails.body.email)
          this.router.navigateByUrl('Home/Notes')
        }
      })
    }
    else
    {
      this.authService.authorizeUser()
    }
  }

}
