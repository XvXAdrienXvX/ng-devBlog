import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { filterControlType, filterModel } from '../Common/Filter/filter.model';
import { BlogPostService } from '../Core/post.service';
import { IPost } from './Shared/post.model';

@Component({
    template: `
    <div class="container">
        <filter-panel [filterFields]="filter"></filter-panel> 
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
  filter: filterModel[];

  constructor(private postService: BlogPostService){ }

  public ngOnInit(){
    this.getPosts();
    this.setFilterFields();
  }
  
  public getPosts(){
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  public setFilterFields(): void{
    this.filter = [
       { label : 'Title', ControlType: filterControlType.Textbox},
       { label : 'Date', ControlType: filterControlType.Date}
    ]
  }
}