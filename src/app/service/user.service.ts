import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  UserService {

  private url: string = 'localhost:8080/api/users';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    const urlByID = `${this.url}/${id}`
    return this.http.get<User>(urlByID)
  }

  //add freelance service
  addUserService(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions).pipe(catchError(error => {
      throw "gagal"
    }))
  }

  errorHandler(error:any):void{
    alert("gagal")
  }

  deleteUserService(id: number): Observable<User> {
    const urlByID = `${this.url}/${id}`
    return this.http.delete<User>(urlByID)
  }

  editUserService(id: number,user: User): Observable<User> {
    const urlByID = `${this.url}/${id}`
    //const urlByID = `${this.url}/${user.id as number}` => tanpa param id 
    return this.http.put<User>(urlByID, user,this.httpOptions)
  }


}
