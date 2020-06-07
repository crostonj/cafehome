import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserRepsonse } from '../../models/user/userReponse';
import { UserRequest } from '../../models/user/UserRequest';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userServiceUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.userServiceUrl = 'http://localhost:8102/';
  }

  authenticate(username: string, password: string): Observable<UserRepsonse> {
    const authRequest = new UserRequest();
    authRequest.password = password;
    authRequest.email = username;

    return this.http.post<UserRepsonse>(
      `${this.userServiceUrl}authenticate`,
      authRequest,
      this.httpOptions)
      .pipe(
        catchError(this.handleError<UserRepsonse>('Authenticate'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
