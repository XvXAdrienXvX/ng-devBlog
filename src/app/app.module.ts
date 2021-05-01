import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostAppComponent } from './post-app.component';
import { PostListComponent } from './Post/post-list.component';
import { PostComponent } from './Post/post.component';
import { NavBarComponent } from './Common/nav-bar/nav.component';
import { BlogPostService } from './Service/post.service';
import { PostDetailsComponent } from './Post/post-details/post-details.component';
import { ToastrService } from './Service/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Common/Errors/error404.component';
import { PostRouteActivator } from './Post/post-details/post-route-activator.service';

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
