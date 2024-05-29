import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  response!:any;
  message!:string;
  signUpForm = new FormGroup({username: new FormControl(),work: new FormControl(), password: new FormControl()});
  constructor(private dbservice:DatabaseService){}

register() {
  this.dbservice.register(this.signUpForm.value).subscribe({
    next:data=>{
      console.log(data);
      this.response = Object.values(data);
      if(!this.response[0])
        {
          this.message="Already registered";
        }
      else{
        window.location.href='/login';
      }
    },
    error:error=>console.log(error)
    });
}
}
