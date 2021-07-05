import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../Core/post.service';
import { IPost } from './Shared/post.model';

@Component({
    template: `
    <div class="container">
        <post-container *ngFor="let post of posts"  [post]="post" ></post-container>
    </div>
    `,
    styleUrls:[
      '/post-list.component.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class PostListComponent implements OnInit{
  posts: IPost[];

  constructor(private postService: BlogPostService){
     
  }

  public ngOnInit(){
    this.posts = this.postService.getPosts();
  }
}