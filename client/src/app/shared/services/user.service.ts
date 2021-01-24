import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {User} from '../models/user.model';
import {BaseApi} from '../core/base-api';


@Injectable({providedIn: 'root'})
export class UsersService extends BaseApi{

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  public login(user: User): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/auth/login', user);
  }

  public createNewUser(user: User): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/auth/register', user);
  }

}
