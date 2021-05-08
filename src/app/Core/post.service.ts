import { Injectable } from '@angular/core';
import { IPostType, IPost } from '../Post/Shared/post.model';
import * as _ from 'lodash';

@Injectable()
export class BlogPostService{
   
   getPosts(): IPost[]{
       return postList;
   }
   
   getPostById(id: number): IPost{
       return postList.find(post => post.PostId == id);
   }

   getPostsByUserId(userId: number): IPost[]{
      return _.filter(postList, (item) =>{
          return item.UserId == userId;
      });
   }

   getCategories(): IPostType[]{
       return categoryList;
   }
}

const postList : IPost[] = [
    {
        PostId: 1,
        UserId: 1,
        postTypeId: 1,
        imgUrl: 'assets/images/EFCore6.png',
        title: 'What\'s New in EF Core 6.0',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed maximus bibendum turpis vitae auctor. 
        Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. `,
        postDate: new Date('04/28/2021')
    }
]

const categoryList: IPostType[] = [
    {
        postTypeId: 1,
        name:'.Net Tech'
    },
    {
        postTypeId: 2,
        name: 'Web Dev'
    },
    {
        postTypeId: 3,
        name: 'cloud'
    }
]
