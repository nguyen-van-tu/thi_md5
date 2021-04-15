import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {IBook} from '../ibook';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: IBook[] = [];
  constructor(private route: Router,
              private bookService: BookService) {
    this.showAllBook();
  }

  ngOnInit(): void {

  }

  showAllBook() {
    this.bookService.getAllBook().subscribe(books => {
      this.books = books;
    });
  }
}
