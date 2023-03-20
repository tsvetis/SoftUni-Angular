import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { UserData } from './users.interface';

@Injectable({ providedIn: 'root' })
export class UsersService {
  users: UserData[] = [];

  constructor(public http: HttpClient) {}

  fetchUsers() {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<UserData[]>(URL);
  }

  addUser() {
    // this.users = [...this.users, { name: 'Test Value' }];
  }
}
