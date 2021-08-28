import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IPost } from '../Post/Shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts: IPost[] = [
        {PostId: 1,
        UserId: 1,
        postTypeId: 1,
        imgUrl: 'assets/images/EFCore6.png',
        title: 'What\'s New in EF Core 6.0',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed maximus bibendum turpis vitae auctor. 
        Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. `,
        postDate: new Date('04/28/2021')},
        {   PostId: 2,
            UserId: 1,
            postTypeId: 1,
            imgUrl: 'assets/images/RestAPI.png',
            title: 'REST API Design',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed maximus bibendum turpis vitae auctor. 
            Nulla porttitor gravida leo, ac tincidunt orci malesuada eget. `,
            postDate: new Date('04/28/2021')}
      ];
      return {posts}
  }

}