import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list';


const baseUrl = 'http://localhost:3000/api/notes';
@Injectable({
  providedIn: 'root'
})
export class NotesapiService {

  
  constructor(private http: HttpClient) { }

  getAll(): Observable<List[]> {
    return this.http.get<List[]>(baseUrl);
  }

  get(id: any): Observable<List> {
    return this.http.get<List>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<List[]> {
    return this.http.get<List[]>(`${baseUrl}?title=${title}`);
  }
}
