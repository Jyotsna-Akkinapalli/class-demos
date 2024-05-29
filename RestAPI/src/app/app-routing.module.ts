import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  title:"Home"
},
{
  path:'login',
  component:LoginComponent,
  title:"Login"
},
{
  path:'signup',
  component:SignupComponent,
  title:"Signup"
},
{
  path:'welcome',
  component:WelcomeComponent,
  title:"Welcome"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
