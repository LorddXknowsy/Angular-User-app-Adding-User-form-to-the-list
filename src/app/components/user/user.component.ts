import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../servises/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  @Input() user: User = {
    name: '',
    age: null,
    gender: '',
    location: '',
    image: '',
  };
  constructor(private dataService: DataService) {}
  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isOnline = true;
      value.hide = true;

      this.dataService.addUser(value);

      this.form.reset();
    }
  }

  ngOnInit() {}
}
