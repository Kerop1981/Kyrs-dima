import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
 @Input() user!: User;
 @Input() index!: number;
 @Output() DeleteUserClick = new EventEmitter<User>();

 deleteUser(){
  this.DeleteUserClick.emit(this.user)
 }
}
