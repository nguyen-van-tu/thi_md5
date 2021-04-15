import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  book: IBook;

  constructor(private bookService: BookService, private router: Router, private a: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.a.paramMap.subscribe(paraMap => {
      this.id = +paraMap.get('id');
      this.bookService.getBookById(this.id).subscribe(result => {
        this.book = result;
      });
    });
  }
  viewBook(id:number) {
    this.bookService.viewBook(id).subscribe(a => {
      this.book = a;
    });
  }
}
