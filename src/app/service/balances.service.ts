import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../model/expense";
import {Balances} from "../model/balances";
import {BalancesMonth} from "../model/balancesMonth";
import {BalancesYear} from "../model/balancesYear";

@Injectable({
  providedIn: 'root'
})
export class BalancesService {
  private baseUrl='http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  getBalances(): Observable<Balances[]>{
    return this.http.get<Balances[]>(this.baseUrl+"/balances");
  }

  getBalancesMonth(): Observable<BalancesMonth[]>{
    return this.http.get<BalancesMonth[]>(this.baseUrl+"/balances_month");
  }
  getBalancesYear(): Observable<BalancesYear[]>{
    return this.http.get<BalancesYear[]>(this.baseUrl+"/balances_year");
  }
}
