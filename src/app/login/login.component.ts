import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '1';
  msg = '';
  public password: string;
  public username: string;

  constructor(private userService: UserService, private routes: Router ) { }

  ngOnInit(): void {
  }

  authenticate(username: string, password: string): void {
      this.userService.authenticate(username, password)
      .subscribe(
        (response) => {
          if (response.token != null){
            this.routes.navigate(['/']);

          }
          else{
            this.msg = 'Invalid username or password';
                }
          });
    }

    register(username: string, password: string): void{
      this.userService.register(username, password)
      .subscribe(
        (response) => {
          if (response.token != null){
            this.routes.navigate(['/user-profile']);

          }
          else{
            this.msg = 'Invalid username or password';
                }
          });
    }
}


