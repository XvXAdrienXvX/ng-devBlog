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
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { CreatePostRouteActivator } from './Post/create-post/create-post-activator.service';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { FormBuilder,  ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MarkdownModule.forRoot({ sanitize: SecurityContext.NONE, 
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false
        },
      },})
  ],
  providers: [BlogPostService, ToastrService, PostRouteActivator, CreatePostRouteActivator , MarkdownService ,AuthService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
