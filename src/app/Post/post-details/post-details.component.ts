import { Component } from '@angular/core';
import { BlogPostService } from 'src/app/Core/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'post-list',
    templateUrl: './post-details.component.html'
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