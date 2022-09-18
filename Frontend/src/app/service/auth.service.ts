import { Injectable } from '@angular/core';
import { User } from '../model/user';

export interface AuthModel {
  password: string;
  userName: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  authUser(user: AuthModel): User {
    let allUsers: Record<string, User> = {};
    if (localStorage.getItem('Users')) {
      allUsers = JSON.parse(localStorage.getItem('Users') as string);
    }

    return allUsers[user.userName];
  }
}
