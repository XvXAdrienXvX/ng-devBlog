import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector : 'post-container',
    template: `
    <div class="blog-post">
        <div class="blog-img">
            <img src="{{post.imgUrl}}" >
        </div>
        <div class="blog-post-info">
            <div class="blog-post-date">
                <span>{{post.postDate.toDateString()}}</span>
            </div>
            <h1 class="blog-post-title">{{post.title}}</h1>
            <p class="blog-post-text">{{post.body}}</p>
        </div>
        <a class="blog-post-readmore" [routerLink]="['/post', post.PostId]">Read more</a>
    </div>
    `
})
export class PostComponent {
   @Input() post: any
   @Output() eventReadPost = new EventEmitter()

}