import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../Service/post.service';
import { ToastrService } from '../Service/toastr.service';

@Component({
    template: `
    <div class="container">
        <post-container *ngFor="let post of posts" (click)="handlePostClick(post.name)" [post]="post" ></post-container>
    </div>
    `
})
export class PostListComponent implements OnInit{
  posts: any[];

  constructor(private postService: BlogPostService,
              private toastr: ToastrService){
     
  }

  public ngOnInit(){
    this.posts = this.postService.getPosts();
  }

  handlePostClick(postName){
     this.toastr.onSuccess(postName);
  }
}