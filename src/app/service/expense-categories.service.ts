import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExpenseCategories} from "../model/expenseCategories";

@Injectable({
  providedIn: 'root'
})
export class ExpenseCategoriesService {

  private baseUrl='http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  getExpenseCategories(): Observable<ExpenseCategories[]>{
    return this.http.get<ExpenseCategories[]>(this.baseUrl+"/expensecategories");
  }

  getExpenseCategoriesDetail(id:number): Observable<ExpenseCategories>{
    return this.http.get<ExpenseCategories>(this.baseUrl+"/expensecategories"+`/${id}`)
  }

  addExpenseCategories(expensecategories:ExpenseCategories): Observable<ExpenseCategories>{
    return this.http.post<ExpenseCategories>(this.baseUrl+"/expensecategories",expensecategories,this.httpOptions)
  }
  deleteExpenseCategories(id:BigInt){
    return this.http.delete(this.baseUrl+"/expensecategories/"+`${id}`)
  }

  updateExpenseCategories(id:any,expensecategories:ExpenseCategories):Observable<ExpenseCategories>{
    return this.http.put<ExpenseCategories>(this.baseUrl+"/expensecategories/"+`${id}`,expensecategories,this.httpOptions)
  }
}
