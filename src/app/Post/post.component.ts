import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector : 'post-container',
    template: `
    <div class="blog-post">
        <div class="blog-img">
            <img src="{{post.logo}}" >
        </div>
        <div class="blog-post-info">
            <div class="blog-post-date">
                <span>{{post.Date}}</span>
            </div>
            <h1 class="blog-post-title">{{post.name}}</h1>
            <p class="blog-post-text">{{post.long_description}}</p>
        </div>
        <a class="blog-post-readmore" [routerLink]="['/post', post.id]">Read more</a>
    </div>
    `,
    styleUrls:[
        '/post-list.component.css'
      ],
    encapsulation: ViewEncapsulation.None
})
export class PostComponent {
   @Input() post: any
   @Output() eventReadPost = new EventEmitter()

}