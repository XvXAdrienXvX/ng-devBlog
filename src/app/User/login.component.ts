import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Core/auth.service';

@Component({
   templateUrl: '/login.component.html',
   styleUrls:[
    '/login.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent{
   username
   password

   constructor(private authService: AuthService,
               private router: Router){

   }

   login(formValues){
       this.authService.loginUser(formValues.username, formValues.password);
       this.router.navigate(['post']);
   }
}