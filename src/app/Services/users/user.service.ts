import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserRepsonse } from '../../models/user/userReponse';
import { UserRequest } from '../../models/user/UserRequest';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
import { Profile } from '../../models/user/profile';

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



  updateProfile(profile: Profile): Observable<Profile>{
    return this.http.patch<Profile>(
        `${this.userServiceUrl}profile`,
        profile,
        this.httpOptions
      )
      .pipe(
        catchError(this.handleError<Profile>('Profile'))
      );
  }

   getProfile(username: string): Observable<Profile>{
    return this.http.get<Profile>(
        `${this.userServiceUrl}profile/${username}`,
        this.httpOptions,

      )
      .pipe(
        catchError(this.handleError<Profile>('Profile'))
      );
  }
  createProfile(profile: Profile): Observable<Profile>{
    return this.http.post<Profile>(
        `${this.userServiceUrl}profile`,
        profile,
        this.httpOptions
      )
      .pipe(
        catchError(this.handleError<Profile>('Profile'))
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
