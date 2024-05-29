import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
  apiUrl = 'http://localhost:3000';
  httpClient=inject(HttpClient);

  ngOnInit(): void { }

  login(myform:any):Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/auth`,myform);
  }
  register(signUpForm:any):Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/register`,signUpForm);
  }
  verifyToken(token:any):Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/verifyToken`,token);
  }
}
