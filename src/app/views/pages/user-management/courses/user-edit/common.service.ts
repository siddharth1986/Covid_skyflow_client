import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {

  constructor(
    public _http: HttpClient,
  ) {

  }
  
  getMetadata(): Observable<any> {
    return this._http.get<any>("http://localhost:3000/api/batch");
  }
}
