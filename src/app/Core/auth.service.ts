import { Injectable } from '@angular/core';
import { IUser } from '../User/Shared/user.model';

@Injectable()
export class AuthService{
  currentUser: IUser;

  loginUser(username: string, password: string){
      this.currentUser = {
          UserId: 1,
          firstName: 'Adrien',
          lastName: 'Vvv',      
          username:'AdrienX',  
          email: 'a@gmail.com',
          ProfileImageUrl: null
      }
  }

  isAuthenticated(){
      return !!this.currentUser;
  }

  UpdateCurrentUser(firstName: string, lastName: string){
      this.currentUser.firstName = firstName;
      this.currentUser.lastName = lastName;
  }
}