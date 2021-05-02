import { Injectable } from '@angular/core';
import { IPost } from '../Post/Shared/post.model';

@Injectable()
export class BlogPostService{
   
   getPosts(): IPost[]{
       return postList;
   }
   
   getPost(id: number): IPost{
       return postList.find(post => post.id == id);
   }
}

const postList : IPost[] = [
    {
        id: 1,
        name: 'EF Core 6',
        logo: 'assets/images/EFCore6.png',
        Date: new Date('28/04/2021'),
        Description: 'What\'s New in EF Core 6.0',
        Content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed maximus bibendum turpis vitae auctor. 
        Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. 
        `
    },
    {
        id: 2,
        name: 'EF Core 6',
        logo: 'assets/images/EFCore6.png',
        Date:new Date('28/04/2021'),
        Description: 'What\'s New in EF Core 6.0',
        Content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed maximus bibendum turpis vitae auctor. 
        Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. 
        `
    },
    {
        id: 3,
        name: 'EF Core 6',
        logo: 'assets/images/EFCore6.png',
        Date:new Date('28/04/2021'),
        Description: 'What\'s New in EF Core 6.0',
        Content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed maximus bibendum turpis vitae auctor. 
        Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. 
        `
    }
]
