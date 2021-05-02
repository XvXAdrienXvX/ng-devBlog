import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/Core/auth.service';


@Component({
    selector:'nav-bar',
    templateUrl: './nav.component.html',
    styleUrls:[
      '/nav.component.css'
    ],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent{
   constructor(private authService: AuthService){

   }
}