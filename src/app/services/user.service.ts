import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {machineList} from '../model/machinelist';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private machineListUrl = 'http://localhost:8080/api/machine/list';
  private machineUrl = 'http://localhost:8080/api/machine/';
  private machineremoveUrl = 'http://localhost:8080/api/machine/delete/';
  private machinenoUrl = 'http://localhost:8080/api/machine/mno';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
  getMachineList(): Observable<machineList[]> {
    return this.http.get<machineList[]>(this.machineListUrl);
  }
  getMachine(id:string): Observable<machineList[]> {
    return this.http.get<machineList[]>(this.machineUrl+id);
  }

  deleteMachine(machineNo:string): Observable<string> {
    return this.http.delete<string>(this.machineremoveUrl+machineNo);
  }

  getMachineNo(): Observable<machineList[]> {
    return this.http.get<machineList[]>(this.machinenoUrl);
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
