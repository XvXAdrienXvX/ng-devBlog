import { Injectable } from '@angular/core';

@Injectable()
export class BlogPostService{
   
   getPosts(){
       return postList;
   }

}

const postList = [
    {
        id: 1,
        name: 'EF Core 6',
        logo: 'assets/images/EFCore6.png',
        Date:'28/04/2021',
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
        Date:'28/04/2021',
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
        Date:'28/04/2021',
        short_description: 'What\'s New in EF Core 6.0',
        long_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed maximus bibendum turpis vitae auctor. 
        Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. 
        `
    }
]
