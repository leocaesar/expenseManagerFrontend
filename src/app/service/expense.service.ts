import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../model/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl='http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  getExpense(): Observable<Expense[]>{
    return this.http.get<Expense[]>(this.baseUrl+"/expenses");
  }

  getExpenseDetail(id:number): Observable<Expense>{
    return this.http.get<Expense>(this.baseUrl+"/expense"+`/${id}`)
  }

  addExpense(expense:Expense): Observable<Expense>{
    return this.http.post<Expense>(this.baseUrl+"/expense",expense,this.httpOptions)
  }
  deleteExpense(id:BigInt){
    return this.http.delete(this.baseUrl+"/expense/"+`${id}`)
  }

  updateExpense(id:any,expense:Expense):Observable<Expense>{
    return this.http.put<Expense>(this.baseUrl+"/expense/"+`${id}`,expense,this.httpOptions)
  }
}
