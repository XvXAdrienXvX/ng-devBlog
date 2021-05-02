import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  PostListComponent,
  PostDetailsComponent,
  PostRouteActivator
} from './Post/index';
import { AppComponent } from './app.component';
import { PostComponent } from './Post/post.component';
import { NavBarComponent } from './Common/nav-bar/nav.component';
import { BlogPostService } from './Core/post.service';
import { ToastrService } from './Core/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Common/Errors/error404.component';
import { AuthService } from './Core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [BlogPostService, ToastrService, PostRouteActivator, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
