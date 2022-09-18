import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AlertyfyService } from 'src/app/service/alertyfy.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertyfy: AlertyfyService,
    private router: Router
  ) {}

  ngOnInit() {}
  onLogin(loginForm: NgForm) {
    const user: User = this.authService.authUser({
      password: loginForm.value.password,
      userName: loginForm.value.userName,
    });

    if (user) {
      localStorage.setItem('token', user.userName);
      this.alertyfy.success('login success');
      this.router.navigate(['/']);
    } else {
      this.alertyfy.error('Login not sucessful');
    }
  }
}
