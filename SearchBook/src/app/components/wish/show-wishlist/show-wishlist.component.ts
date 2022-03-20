import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from 'src/app/interfaces/books.interface';
import { WishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-show-wishlist',
  templateUrl: './show-wishlist.component.html',
  styleUrls: ['../../../css/wish.component.scss']
})
export class ShowWishlistComponent implements OnInit {
  
  wishList$!: Observable<Book[]>;

  constructor(private wishService: WishService) { }

  ngOnInit() {
    this.wishList$ = this.wishService.getList();
  }

}
