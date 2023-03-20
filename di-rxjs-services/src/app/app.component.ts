import { Component } from '@angular/core';
import { UserData } from './users/users.interface';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: UserData[] = [];
  inputValue: string = '';

  constructor(public userService: UsersService) {
    const { users } = userService;
    console.log({ users });

    this.userService.fetchUsers().subscribe({
      complete: () => console.log('Complete!'),
      error: (e) => console.log('Error ', e),
      next: (data: UserData[]) => {
        this.users = data;

        // this.users[0].company.bs;

        console.log({ data });
      },
    });
  }

  clickHandler() {
    this.userService.addUser();
  }
}
