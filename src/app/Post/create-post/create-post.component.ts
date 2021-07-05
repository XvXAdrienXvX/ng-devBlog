import { OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Component , EventEmitter} from '@angular/core';
import { BlogPostService } from 'src/app/Core/post.service';
import { IPost, IPostType } from '../Shared/post.model';
import { MarkdownService  } from 'ngx-markdown';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Core/auth.service';
import { Router } from '@angular/router';

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
   private postObj: IPost
   convertedText: string
   createPostForm: FormGroup
   postName: FormControl
   postType: FormControl
   postContent: FormControl
   
   constructor(private postService: BlogPostService, private md: MarkdownService, 
              private formBuilder: FormBuilder, private authService: AuthService, private router: Router){

   }

   ngOnInit(): void {
      this.createPostForm = this.formBuilder.group({
       body: [null],
       postName: ['', [Validators.required]],
       postType: ['', [Validators.required]],
       postContent: ['', [Validators.required]]
     })

      this.postCategoryList = this.postService.getCategories();
   }
   
   changeCategory(value){
      this._postTypeId = value;
   }

   updateOutput(mdText: string){
      this.convertedText = this.md.compile(mdText);
   }

   createPost(values){
      this.postObj= {
         PostId: undefined,
         UserId: this.authService.GetCurrentUserId(),
         title: values.postName,
         postTypeId: this._postTypeId,
         imgUrl: null,
         body: values.postContent,
         postDate: new Date(),
      }

      this.postService.savePost(this.postObj);
      this.router.navigate(['post']);
   }
}