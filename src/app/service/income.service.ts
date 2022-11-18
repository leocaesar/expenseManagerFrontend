import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Income } from '../model/income';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private url: string = 'http://localhost:3005/income';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }

  getIncomes(): Observable<Income[]> {
    return this.http.get<Income[]>(this.url);
  }

  getIncome(id: number): Observable<Income> {
    const urlByID = `${this.url}/${id}`
    return this.http.get<Income>(urlByID)
  }

  addIncomesService(incomes: Income): Observable<Income> {
    //const headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic'+ btoa('user:user')})
    return this.http.post<Income>(this.url, incomes, this.httpOptions)
  }

  deleteIncomesService(id: number): Observable<Income> {
    const urlByID = `${this.url}/${id}`
    return this.http.delete<Income>(urlByID)
  }

  editIncomesService(id: number,incomes: Income): Observable<Income> {
    const urlByID = `${this.url}/${id}`
    //const urlByID = `${this.url}/${incomeCategories.id as number}` => tanpa param id 
    return this.http.put<Income>(urlByID, incomes,this.httpOptions)
  }
}
