import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: IBook = {
    id: 0,
    name: '',
    author: '',
    description: ''
  };

  constructor(private router: Router,
              private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  createBook() {
    this.bookService.addNewBook(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
