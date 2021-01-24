import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsersService } from '../../shared/services/user.service';
import { Message } from '../../shared/models/message.model';
import { AuthorizationService } from '../../shared/services/authorization.service';
import {HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthorizationService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.message = new Message('danger', '');
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params.nowCanLogin){
          this.openSnackBar('Now u can login!');
        }
      });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  private openSnackBar(message: string, action?: string): void {
    this.snackBar.open(message, action, {
      duration: 7000, verticalPosition : 'bottom'
    });
  }

  onSubmit(): void {
    const formData = this.form.value;

    this.usersService.login(formData)
      .subscribe((user) => {
        this.openSnackBar('OK!');
        window.localStorage.setItem('token', JSON.stringify(user.token));
        window.localStorage.setItem('user', JSON.stringify(user.userId));
        this.authService.login();
        this.router.navigate(['/system', 'bill']);
      }, (err: HttpErrorResponse) => {
      this.openSnackBar(err.error.message);
      this.form.reset();
    }
    );
  }
}
