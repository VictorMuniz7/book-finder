import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit{

  booksList$: Book[] = []

  showList: boolean = false
  isLoading: boolean = false

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
    this.isLoading = true
      this.booksService.getBooks(this.localQuery, startIndex).subscribe((data) => {
        this.isLoading = false
        this.showList = true
        this.booksList$ = data.items
        console.log(this.booksList$.length)
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

}
