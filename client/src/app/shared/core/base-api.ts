import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class BaseApi {

  // private baseUrl = 'http://localhost:5000/api/';
  // private baseUrl = 'http://192.168.0.11:5000/api/';
  private baseUrl = '/api/';

  constructor(public httpClient: HttpClient) {

  }

  static getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `jwt ${JSON.parse(localStorage.getItem('token'))}`,
      user: JSON.parse(localStorage.getItem('user'))
    });
  }


  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.httpClient.get<any>(this.getUrl(url), {
      headers: BaseApi.getHeaders()
    });
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.httpClient.post<any>(this.getUrl(url), data, {
      headers: BaseApi.getHeaders()
    });
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.httpClient.put<any>(this.getUrl(url), data, {
      headers: BaseApi.getHeaders()
    });
  }

  public delete(url: string = ''): Observable<any> {
    return this.httpClient.delete<any>(this.getUrl(url), {
      headers: BaseApi.getHeaders()
    });
  }

}
