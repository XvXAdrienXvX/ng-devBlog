import { OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Component , EventEmitter} from '@angular/core';
import { BlogPostService } from 'src/app/Core/post.service';
import { IPost, IPostType } from '../Shared/post.model';
import { MarkdownService } from 'ngx-markdown';

@Component({
 templateUrl: '/create-post.component.html',
 styleUrls:[
     '/create-post.component.css'
 ],
 encapsulation: ViewEncapsulation.None
})
export class CreatePostComponent implements OnInit{
   
   private _postTypeId: number
   private postCategoryList: IPostType[]
   convertedText: string

   constructor(private postService: BlogPostService, private md: MarkdownService){

   }

   ngOnInit(): void {
      this.postCategoryList = this.postService.getCategories();
   }
   
   changeCategory(value){
      this._postTypeId = value;
   }

   updateOutput(mdText: string){
      this.convertedText = this.md.compile(mdText);
   }
}