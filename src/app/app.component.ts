import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  template: `
     <nav-bar></nav-bar>
     <router-outlet></router-outlet> 
  `,
  styleUrls:[
    '/app.component.css'
  ],
encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
