import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { BlogPostService } from '../../Service/post.service';

@Injectable()
export class PostRouteActivator implements CanActivate{
  constructor(private postService: BlogPostService,
              private route: Router){

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const postExists = !!this.postService.getPost(+route.params['id']);

      if (!postExists){
           this.route.navigate(['/404']);
       }

     return postExists;
   }
}