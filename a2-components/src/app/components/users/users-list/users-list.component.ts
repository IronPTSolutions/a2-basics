import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {
  users: Array<User> = [
    {
      name: 'Carlos',
      email: 'carlos@example.org'
    },
    {
      name: 'María',
      email: 'maria@example.org'
    }
  ];
}
