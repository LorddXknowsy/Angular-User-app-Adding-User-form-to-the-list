import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[];
  usersUpdated = new Subject();
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        name: 'Alex',
        age: 73,
        gender: 'male',
        location: 'Tbilisi',
        image:
          'https://images.robertharding.com/preview/RM/RH/HORIZONTAL/860-287441.jpg',
        isOnline: true,
        hide: true,
      },
      {
        name: 'Ninore',
        age: 37,
        gender: 'female',
        location: 'Telavi',
        image:
          'https://my420tours.com/wp-content/uploads/2018/09/how-long-does-a-high-last-2.jpg',
        isOnline: false,
        hide: true,
      },
      {
        name: 'David',
        age: 29,
        gender: 'male',
        location: 'Senaki',
        image:
          'https://my420tours.com/wp-content/uploads/2018/09/how-long-does-a-high-last-4.jpg',
        isOnline: true,
        hide: true,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
