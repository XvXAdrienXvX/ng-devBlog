import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'post-app',
  template: `
     <nav-bar></nav-bar>
     <div class="flex-container">
        <post-list></post-list>
     </div>
  `,
  styleUrls:[
    '/post-app.component.css'
  ],
encapsulation: ViewEncapsulation.None
})
export class PostAppComponent {

}
