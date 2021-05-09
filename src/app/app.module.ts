import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  PostListComponent,
  PostDetailsComponent,
  PostRouteActivator,
  CreatePostComponent
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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule} from '@angular/material';
import { CreatePostRouteActivator } from './Post/create-post/create-post-activator.service';
import { MarkdownService } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    PostDetailsComponent,
    CreatePostComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [BlogPostService, ToastrService, PostRouteActivator, CreatePostRouteActivator , MarkdownService ,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
