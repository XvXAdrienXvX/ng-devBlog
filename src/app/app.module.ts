import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostAppComponent } from './post-app.component';
import { PostListComponent } from './Post/post-list.component';

@NgModule({
  declarations: [
    PostAppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PostAppComponent]
})
export class AppModule { }
