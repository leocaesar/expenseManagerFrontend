import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IncomeCategories } from '../model/incomeCategories';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeCategoriesService {

  // private url: string = 'http://localhost:3005/income-categories';
  private url: string = 'http://localhost:8080/api/income-categories';

  constructor(private http: HttpClient) { }
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-type': 'application/json' })
  // }

  getIncomeCategories(): Observable<IncomeCategories[]> {
    return this.http.get<IncomeCategories[]>(this.url);
  }

  getIncomeCategory(id: number): Observable<IncomeCategories> {
    const urlByID = `${this.url}/${id}`
    return this.http.get<IncomeCategories>(urlByID)
  }

  addIncomeCategoriesService(incomeCategories: IncomeCategories): Observable<IncomeCategories> {
    const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }
    return this.http.post<IncomeCategories>(this.url, incomeCategories, httpOptions)
  }

  deleteIncomeCategoriesService(id: number): Observable<IncomeCategories> {
    const urlByID = `${this.url}/${id}`
    return this.http.delete<IncomeCategories>(urlByID)
  }

  editIncomeCategoriesService(id: number,incomeCategories: IncomeCategories): Observable<IncomeCategories> {
    const urlByID = `${this.url}/${id}`
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
      }
    //const urlByID = `${this.url}/${incomeCategories.id as number}` => tanpa param id 
    return this.http.put<IncomeCategories>(urlByID, incomeCategories,httpOptions)
  }
}
