import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostAppComponent } from './post-app.component';
import { PostListComponent } from './Post/post-list.component';
import { PostComponent } from './Post/post.component';

@NgModule({
  declarations: [
    PostAppComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PostAppComponent]
})
export class AppModule { }
