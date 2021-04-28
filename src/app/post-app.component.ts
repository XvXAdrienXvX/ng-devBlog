import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'post-app',
  template: `<post-list></post-list>`,
  styleUrls:[
    '/post/post-list.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PostAppComponent {

}
