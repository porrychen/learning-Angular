import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['../../../css/book.component.scss']
})
export class BookSearchComponent implements OnInit, OnDestroy {
  private searchForm = new Subject<string>();

  private obs!: Subscription;

  constructor(private bookService: BookService) { }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }

  ngOnInit(): void {
    this.obs = this.searchForm.pipe(
      // wait 500ms after each keystroke before considering the value
      debounceTime(500),
      // ignore new value if same as previous value
      distinctUntilChanged(),

      // switch to new search observable each time the value changes
      switchMap((name: string) => this.bookService.searchBooks(name))
    ).subscribe();
  }

  searchBooks(name: string) {
    this.searchForm.next(name.trim());
  }

}
