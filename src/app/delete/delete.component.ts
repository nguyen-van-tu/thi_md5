import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: number;
  book: IBook;

  constructor(private productService: BookService, private router: Router, private a: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.a.paramMap.subscribe(paraMap => {
      this.id = +paraMap.get('id');
      this.productService.getBookById(this.id).subscribe(result => {
        this.book = result;
      });
    });
  }
  deleteBook() {
    this.productService.deleteBook(this.id).subscribe(() => {
      alert('Đã xóa');
      this.router.navigate(['/']);
    });
  }
}
