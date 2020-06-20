import { Injectable } from '@angular/core';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }

  getToken(){
    return !!localStorage.getItem('SeesionUser');
  }



}

