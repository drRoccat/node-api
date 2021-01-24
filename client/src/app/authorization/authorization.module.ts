import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthorizationComponent} from './authorization.component';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AuthorizationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    MatInputModule,
    InputsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AuthorizationModule {

}
