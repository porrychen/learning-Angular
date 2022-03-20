import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Book } from '../interfaces/books.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private bookList!: Book[];
  private books$ = new BehaviorSubject(this.bookList);

  private defaultImage = 'assets/images/noImage.png';

  constructor(private http: HttpClient) { }

  private getBooks = (name: string): Observable<Book[]> => {
    if (!name.trim()) {
      return of([]);
    }
    return this.http.get(this.baseUrl + name).pipe(
      map((data: any) => data.items),
      map((items: any) => items.map((item: any): Book => {
        return {
          title: item.volumeInfo.title,
          imageLinks: item.volumeInfo.imageLinks || { thumbnail: this.defaultImage },
          publisher: item.volumeInfo.publisher,
          publishedDate: item.volumeInfo.publishedDate,
          description: item.volumeInfo.description
        };
      }))
    );
  }

  searchBooks(name: string): Observable<Book[]> {
    return this.getBooks(name).pipe(tap(data => {
      this.bookList = data;
      this.books$.next(this.bookList);
    }));
  }

  getBookList(): Observable<Book[]> {
    return this.books$.asObservable();
  }

}
