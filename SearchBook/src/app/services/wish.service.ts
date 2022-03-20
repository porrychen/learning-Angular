import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Book } from '../interfaces/books.interface';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private wishList: Book[] = [];
  private wishes$ = new BehaviorSubject(this.wishList);

  constructor() { }

  getList() {
    return this.wishes$.asObservable();
  }

  add(book: Book) {
    if (this.wishList.some(wish => wish === book)) {
      return;
    }

    this.wishList.push(book);
    this.wishes$.next(this.wishList);
  }

  delete(book: Book) {
    this.wishList = this.wishList.filter(wish => wish !== book);
    this.wishes$.next(this.wishList);
  }
}
