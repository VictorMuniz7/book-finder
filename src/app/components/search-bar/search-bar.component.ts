import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() emitSearch: EventEmitter<string> = new EventEmitter()
  @Output() isEmpty: EventEmitter<any> = new EventEmitter()

  query: string = '';

  search(){
    if(this.query !== '')
    this.emitSearch.emit(this.query.trim())
  }

  empty(){
    if(this.query === '')
    this.isEmpty.emit()
  }

}
