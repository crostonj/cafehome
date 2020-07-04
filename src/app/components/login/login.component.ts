import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from 'app/Services/users/user.service';
import { AuthService } from 'app/Services/auth/auth.service';
// import {UserService} from '../services/user.service';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  name: string;
  password: any;
  errorMessage: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // this.auth.sendToken(form.value);
      this.authService.authenticate(this.name, this.password).subscribe(
        (data: any) => {
          if (data) {
            console.log(data);
            // this.userService.updateLoginData(data.message);
            this.router.navigate(['home']);
          } else {
            // this.errorMessage = data.message;
            console.log(data);
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  onSuccess(): void {
    this.router.navigateByUrl('/home');
  }

  onRegister(): void {
    this.router.navigateByUrl('/register');
  }
}
