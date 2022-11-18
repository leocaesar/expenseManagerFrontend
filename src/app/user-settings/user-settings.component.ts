import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserModel } from '../model/user';
import { UserService } from '../service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  users: User = {
    id: 0,
    username:'',
    password:''
  };
  user2: User[] = [];
  title: string = "Edit User"
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelUser = new UserModel('','')
  submitted = false;

  constructor(private userService: UserService, private location: Location,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    //console.log(this.route?.snapshot.params['id'])
    this.userService.getUser(this.route?.snapshot.params['id']).subscribe(
      (result) => {
        this.users = result
        console.log(this.users)
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    this.updateIncomes()
  }
  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }
  updateIncomes(): void {
    // console.log(this.freelancer)
    this.userService.editUserService(this.users.id,this.users)
      .subscribe(user => {
        alert("SUKSES")
      })
  }

}

