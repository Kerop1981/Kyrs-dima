import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserApiService } from '../user-api.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private userApiService: UserApiService,
              private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.userApiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  DeleteUser(deleteUser: User): void{
    const index = this.users.findIndex((user) => user.id === deleteUser.id)
    if (index != -1) {
      this.users.splice(index, 1)
      
    }
  }
}
