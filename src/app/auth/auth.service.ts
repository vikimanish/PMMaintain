import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import {machineList} from '../model/machinelist';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private addMachineUrl= 'http://localhost:8080/api/machine/addMachine';
  private updateMachineUrl= 'http://localhost:8080/api/machine/updateMachine/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
  addMachine(mlist: machineList): Observable<string> {
    return this.http.post<string>(this.addMachineUrl, mlist, httpOptions);
  }
  // updateMachine(mlist: machineList): Observable<string> {
  //   return this.http.put<string>(this.updateMachineUrl, mlist, httpOptions);
  // }

  updateMachine(sno: number, mlist: machineList): Observable<string> {
    console.log("sno "+sno);
    return this.http.put<string>(this.updateMachineUrl+sno, mlist);
  }
}
