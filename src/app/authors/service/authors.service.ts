import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model/author';
import { environment } from '../../../environments/environment';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private apiUrl = 'http://localhost:8080/books-api/';

  constructor(private http: HttpClient) {}

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(this.apiUrl + 'authors/' + id);
  }
}
