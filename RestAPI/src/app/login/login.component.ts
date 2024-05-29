import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myform = new FormGroup({username: new FormControl(), password: new FormControl()});
  loginRes!:any;
  tokenRes!: any;
  message!:string;
  constructor(private dbservice:DatabaseService){}

login() {
   this.dbservice.login(this.myform.value).subscribe({
    next:data=>{
    console.log(data);
    this.loginRes=Object.values(data);
    if(this.loginRes[0])
    {
      var token=new Token(this.loginRes[1]);
      this.verifyToken(token);
    }
    else{
      this.message="Username or Password is incorrect";
    }
  },
  error:error=>console.log(error)
  });
}

async verifyToken(token:Token)
{
  this.dbservice.verifyToken(token).subscribe({
    next:data=>{
      console.log(data);
      this.tokenRes = Object.values(data);
      console.log("tokenRes : "+this.tokenRes[0]);
      if(this.tokenRes[0])
        {
          localStorage.setItem('name',this.tokenRes[1][0].name);
          localStorage.setItem('work',this.tokenRes[1][0].work);
          window.location.href='/welcome';
        }
        else{
          this.message="Token authentication failed";
        }
    },
    error:error=>console.log(error)
  });
}
}
class Token{
token!:string;
constructor(token:string)
{
  this.token=token;
}
}
