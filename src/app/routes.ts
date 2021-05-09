import { Routes } from '@angular/router';
import { Error404Component } from './Common/Errors/error404.component';
import { CreatePostRouteActivator } from './Post/create-post/create-post-activator.service';
import{
    CreatePostComponent,
    PostDetailsComponent,
    PostListComponent,
    PostRouteActivator
} from './Post/index';

export const appRoutes = [
    { path:'post', component: PostListComponent },
    { path: 'post/:id', component: PostDetailsComponent, canActivate: [PostRouteActivator]},
    { path:'create-post', component: CreatePostComponent, canActivate:[CreatePostRouteActivator] },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/post', pathMatch: 'full'},
    { path: 'user', loadChildren: () => import('./User/user.module').then(mod => mod.UserModule)}
]