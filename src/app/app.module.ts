import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostAppComponent } from './post-app.component';
import { PostListComponent } from './Post/post-list.component';
import { PostComponent } from './Post/post.component';
import { NavBarComponent } from './Common/nav/nav.component';
import { BlogPostService } from './Service/post.service';
import { ToastrService } from './Service/toastr.service';

@NgModule({
  declarations: [
    PostAppComponent,
    PostListComponent,
    PostComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BlogPostService, ToastrService],
  bootstrap: [PostAppComponent]
})
export class AppModule { }
