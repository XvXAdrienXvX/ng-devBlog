import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  template: `
     <nav-bar></nav-bar>
     <div class="flex-container">
        <router-outlet></router-outlet>
     </div>
  `,
  styleUrls:[
    '/app.component.css'
  ],
encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
