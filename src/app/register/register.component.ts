import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User, UserModel } from '../model/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  searchName: string = "";
  users: User[] = [];
  title: string = "User"
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelUser = new UserModel('', '')
  submitted = false;

  constructor(private userService: UserService, private location: Location) { }

  ngOnInit(): void {
    this.getUsers()
  }

  onSubmit() {
    this.submitted = true;
    this.addUser()
  }

  onDelete(id: number) {
    console.log(id);
    this.userService.deleteUserService(id).subscribe((response) => {
      this.getUsers();
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  goBack(): void {
    this.location.back()
  }

  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }

  addUser(username: string = this.modelUser.username,
    password: string = this.modelUser.password): void {
    username = username.trim();
    if (!username) { return }
    this.userService.addUserService({ username, password } as User)
      .subscribe(user => {
        this.users.push(user)
      })
  }

}
