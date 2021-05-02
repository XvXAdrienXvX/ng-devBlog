import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../Core/post.service';
import { ToastrService } from '../Core/toastr.service';
import { IPost } from './Shared/post.model';

@Component({
    template: `
    <div class="container">
        <post-container *ngFor="let post of posts"  [post]="post" ></post-container>
    </div>
    `
})
export class PostListComponent implements OnInit{
  posts: IPost[];

  constructor(private postService: BlogPostService,
              private toastr: ToastrService){
     
  }

  public ngOnInit(){
    this.posts = this.postService.getPosts();
  }
}