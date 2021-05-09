import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/Core/auth.service';

@Injectable()
export class CreatePostRouteActivator implements CanActivate{
  constructor(private route: Router, private authService: AuthService){

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const isSignedIn = this.authService.isAuthenticated()

      if(!isSignedIn){
        this.route.navigate(['/user/login']);
      }

      return isSignedIn;
   }
}