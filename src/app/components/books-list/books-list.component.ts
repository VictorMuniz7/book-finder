import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit{
  @Output() pageChange = new EventEmitter<void>()

  booksList$: Book[] = []

  showList: boolean = false

  localQuery: string =''

  notFound: boolean = false

  startIndex: number = 0

  constructor(
    private booksService: BooksService
  ){}


  ngOnInit(): void {
  }

  getSearch(query: string){
    this.localQuery = query
    this.searchBook(this.startIndex)
  }

  searchBook(startIndex: number){
    if(this.localQuery !== ''){

      this.booksService.getBooks(this.localQuery, startIndex).subscribe((data) => {
          this.showList = true
          this.booksList$ = data.items
        if(this.booksList$ === undefined){
          this.notFound = true
        }else{
          this.notFound = false
        }
    })
    } else {
      this.showList = false
    }
  }

  onPageChange() {
    this.pageChange.emit()
  }
}
