import { OnInit, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Core/auth.service';
import { BlogPostService } from 'src/app/Core/post.service';
import { ICategory } from '../Shared/post.model';

@Component({
 templateUrl: '/create-post.component.html',
 styleUrls:[
     '/create-post.component.css'
 ],
 encapsulation: ViewEncapsulation.None
})
export class CreatePostComponent implements OnInit{
   private postCategoryList: ICategory[]

   constructor(private postService: BlogPostService){

   }

   ngOnInit(): void {
      this.postCategoryList = this.postService.getCategories();
   }

}