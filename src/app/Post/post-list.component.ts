import { Component } from '@angular/core';

@Component({
    selector : 'post-list',
    templateUrl: '/post-list.component.html'
})
export class PostListComponent{
  post = {
      id: 1,
      name: 'EF Core 6',
      logo: 'assets/images/EFCore6.png',
      short_description: 'What\'s New in EF Core 6.0',
      long_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Sed maximus bibendum turpis vitae auctor. 
       Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. 
       `
  }
}