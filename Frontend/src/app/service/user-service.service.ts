import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  addUser(user: User) {
    let allUsers = {};

    if (localStorage.getItem('Users')) {
      allUsers = JSON.parse(localStorage.getItem('Users') as string);
    }

    allUsers = {
      ...allUsers,
      [user.userName]: user,
    };
    localStorage.setItem('Users', JSON.stringify(allUsers));
  }
}
