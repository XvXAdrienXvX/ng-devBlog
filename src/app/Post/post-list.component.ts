import { Component } from '@angular/core';

@Component({
    selector : 'post-list',
    template: `
    <div class="container">
        <post-container *ngFor="let post of postList" [post]="post" ></post-container>
    </div>
    `
})
export class PostListComponent{
  postList = [
        {
            id: 1,
            name: 'EF Core 6',
            logo: 'assets/images/EFCore6.png',
            short_description: 'What\'s New in EF Core 6.0',
            long_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed maximus bibendum turpis vitae auctor. 
            Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. 
            `
        },
        {
            id: 2,
            name: 'EF Core 6',
            logo: 'assets/images/EFCore6.png',
            short_description: 'What\'s New in EF Core 6.0',
            long_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed maximus bibendum turpis vitae auctor. 
            Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. 
            `
        },
        {
            id: 3,
            name: 'EF Core 6',
            logo: 'assets/images/EFCore6.png',
            short_description: 'What\'s New in EF Core 6.0',
            long_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed maximus bibendum turpis vitae auctor. 
            Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. 
            `
        }
  ]
}