import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserRoutes } from '../User/user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  providers: [],
})
export class UserModule {

}