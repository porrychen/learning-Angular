import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from 'src/app/interfaces/books.interface';
import { WishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-edit-wishlist',
  templateUrl: './edit-wishlist.component.html',
  styleUrls: ['../../../css/wish.component.scss']
})
export class EditWishlistComponent implements OnInit {

  wishList$!: Observable<Book[]>;

  constructor(private wishService: WishService) { }

  ngOnInit(): void {
    this.wishList$ = this.wishService.getList();
  }

  delete(wish: Book) {
    this.wishService.delete(wish);
  }

}
