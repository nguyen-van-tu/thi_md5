import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {IBook} from './ibook';
import {HttpClient} from '@angular/common/http';

const URL_BACKEND = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class BookService {

  getAllBook(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(URL_BACKEND + '/books');
  }

  getBookById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(URL_BACKEND + '/books/' + `${id}`);
  }

  addNewBook(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(URL_BACKEND + '/books/create', book);
  }

  updateBook(id: number, book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(URL_BACKEND + '/books/update/' + id, book);
  }

  deleteBook(id: number): Observable<IBook> {
    return this.httpClient.delete<IBook>(URL_BACKEND + '/books/delete/' + id);
  }

  viewBook(id:number): Observable<IBook>{
    return this.httpClient.get<IBook>(URL_BACKEND + 'books/' + id)
  }

  constructor(private httpClient: HttpClient) {
  }
}
