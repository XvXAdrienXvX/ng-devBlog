import { Routes } from '@angular/router';
import { Error404Component } from './Common/Errors/error404.component';
import { PostDetailsComponent } from "./Post/post-details/post-details.component";
import { PostListComponent } from "./Post/post-list.component";
import { PostRouteActivator } from './Post/post-details/post-route-activator.service';

export const appRoutes = [
    { path:'post', component: PostListComponent },
    { path: 'post/:id', component: PostDetailsComponent, canActivate: [PostRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/post', pathMatch: 'full'},
    { path: 'user', loadChildren: () => import('./User/user.module').then(mod => mod.UserModule)}
]