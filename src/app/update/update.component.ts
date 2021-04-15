import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IBook} from '../ibook';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  sub: Subscription;
  book: IBook = {
    id: 0,
    name: '',
    author: '',
    description: ''
  };

  constructor(private router: Router,
              private bookService: BookService,
              private activatedRouter: ActivatedRoute,
  ) {
    this.sub = this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) =>{
      this.book.id = Number(paraMap.get('id'));
      this.getBookById(this.book.id)
      }
    );
  }

  ngOnInit(): void {
  }

  private getBookById(id:number){
    this.bookService.getBookById(id).subscribe(a=>{
      this.book = a;
    })
  }

  updateBook(id:number){
    this.bookService.updateBook(id,this.book).subscribe(() =>{
      this.router.navigate(['/'])
    });
  }

}
