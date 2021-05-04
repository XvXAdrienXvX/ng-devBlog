import { Injectable } from '@angular/core';
import { IUser } from '../User/Shared/user.model';

@Injectable()
export class AuthService{
  currentUser: IUser;

  loginUser(username: string, password: string){
      this.currentUser = {
          id: 1,
          firstName: 'Adrien',
          lastname: 'Vvv',        
      }
  }

  isAuthenticated(){
      return !!this.currentUser;
  }

  UpdateCurrentUser(firstName: string, lastName: string){
      this.currentUser.firstName = firstName;
      this.currentUser.lastname = lastName;
  }
}