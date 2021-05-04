import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserRoutes } from '../User/user.routes';
import { ProfileComponent } from './Profile/profile.component';
import { LoginComponent } from '././Login/login.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
})
export class UserModule {

}