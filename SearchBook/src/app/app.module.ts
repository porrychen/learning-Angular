// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Router
import { AppRoutingModule } from './app-routing.module';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookInformationComponent } from './components/book/book-information/book-information.component';
import { BookSearchComponent } from './components/book/book-search/book-search.component';
import { EditWishlistComponent } from './components/wish/edit-wishlist/edit-wishlist.component';
import { HomeComponent } from './components/home/home.component';
import { ShowWishlistComponent } from './components/wish/show-wishlist/show-wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookInformationComponent,
    BookSearchComponent,
    EditWishlistComponent,
    HomeComponent,
    ShowWishlistComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
