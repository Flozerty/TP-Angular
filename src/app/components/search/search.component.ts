import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchEmitter = new EventEmitter<string>();
  word: string = '';

  constructor() { }

  onSubmit(form: NgForm) {
    const word = form.value['word'];
    this.searchEmitter.emit(word);
  }

  onSearchChange(): void {
    const results = this.word;
    this.searchEmitter.emit(results);
  }

}