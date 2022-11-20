import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Total } from '../model/total';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private url: string = 'http://localhost:8080/api/total_income';

  constructor(private http: HttpClient) { }

  getTotalIncome(): Observable<Total[]> {
    return this.http.get<Total[]>(this.url);
  }

  // getPosts(){
  //   return this.http.get(this.url);
  // }

}
