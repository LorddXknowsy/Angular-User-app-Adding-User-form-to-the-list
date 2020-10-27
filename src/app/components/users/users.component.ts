import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servises/data.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;

  inOnline: boolean;
  data: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

  toggleHide(user) {
    user.hide = !user.hide;
  }
}
