import { Injectable } from '@angular/core';
import { Profile } from 'app/models/user/profile';
import { Observable, of } from 'rxjs';
import { UserRequest } from 'app/models/user/UserRequest';
import { UserRepsonse } from 'app/models/user/userReponse';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userServiceUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.userServiceUrl = 'http://localhost:8102/';
  }

  public signIn(userData: Profile){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
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

  register(username: string, password: string): Observable<UserRepsonse> {
    const authRequest = new UserRequest();
    authRequest.password = password;
    authRequest.email = username;

    return this.http.post<UserRepsonse>(
      `${this.userServiceUrl}register`,
      authRequest,
      this.httpOptions)
      .pipe(
        catchError(this.handleError<UserRepsonse>('Register'))
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
