import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/books.interface';
import { WishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['../../../css/book.component.scss']
})
export class BookInformationComponent implements OnInit {

  @Input() book!: Book;

  constructor(private wishService: WishService) { }

  ngOnInit(): void {
  }

  addWish() {
    this.wishService.add(this.book);
  }

}
