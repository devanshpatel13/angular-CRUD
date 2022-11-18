import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {

  }
  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + "create/", { headers: this.httpHeaders });
  }
  getOneMovies(id: any): Observable<any> {
    return this.http.get(this.baseurl + "create/" + id + '/', { headers: this.httpHeaders });
  }
  updateMovies(movie : any): Observable<any> {
    const body = { name : movie.name, std : movie.std };

    return this.http.put(this.baseurl + "create/" + movie.id + '/', body, { headers: this.httpHeaders });
  }
  createMovie(movie :any): Observable<any> {
    const body = {name : movie.name , std : movie.std}
    return this.http.post(this.baseurl + "create/" , body, { headers: this.httpHeaders });
  }
  deleteMovies(id: any): Observable<any> {
    return this.http.delete(this.baseurl + "create/" + id + '/', { headers: this.httpHeaders });
  }
}
