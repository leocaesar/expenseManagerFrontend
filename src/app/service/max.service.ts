import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Max } from '../model/max';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaxService {

  private url: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getMaxIncome(): Observable<Max[]> {
    return this.http.get<Max[]>(this.url+"/max_income");
  }

  getMaxExpense(): Observable<Max[]> {
    return this.http.get<Max[]>(this.url+"/max_expense");
  }
}
