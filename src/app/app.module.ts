import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  PostListComponent,
  PostDetailsComponent,
  PostRouteActivator
} from './Post/index';
import { PostAppComponent } from './post-app.component';
import { PostComponent } from './Post/post.component';
import { NavBarComponent } from './Common/nav-bar/nav.component';
import { BlogPostService } from './Service/post.service';
import { ToastrService } from './Service/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Common/Errors/error404.component';

@NgModule({
  declarations: [
    PostAppComponent,
    PostListComponent,
    PostComponent,
    PostDetailsComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogPostService, ToastrService, PostRouteActivator],
  bootstrap: [PostAppComponent]
})
export class AppModule { }
