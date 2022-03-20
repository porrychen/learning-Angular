import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/books.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['../../../css/book.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$!: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBookList();
  }

}
