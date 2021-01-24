import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {UsersService} from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor( private usersService: UsersService,
               private router: Router,
               private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue])
    });
  }

  private openSnackBar(message: string, action?: string): void {
    this.snackBar.open(message, action, {
      duration: 7000, verticalPosition : 'bottom'
    });
  }

  onSubmit(): void {
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);

    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'],
          {queryParams: {
              nowCanLogin: true
            }
          });
      }, (err: HttpErrorResponse) => {
        this.openSnackBar(err.error.message);
        this.form.reset();
      });
  }
}

