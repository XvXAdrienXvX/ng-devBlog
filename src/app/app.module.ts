import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostAppComponent } from './post-app.component';
import { PostListComponent } from './Post/post-list.component';
import { PostComponent } from './Post/post.component';
import { NavBarComponent } from './Common/nav/nav.component';

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
  providers: [],
  bootstrap: [PostAppComponent]
})
export class AppModule { }
