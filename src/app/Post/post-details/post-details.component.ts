import { Component } from '@angular/core';
import { BlogPostService } from 'src/app/Core/post.service';
import { ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector : 'post-list',
    templateUrl: './post-details.component.html',
    styleUrls:[
        '/post-details.component.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class PostDetailsComponent{
   post: any

   constructor(private postService: BlogPostService,
              private route: ActivatedRoute){

   }

   ngOnInit() {
       this.post = this.postService.getPost(+this.route.snapshot.params['id']);
   }
}