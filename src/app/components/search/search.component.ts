import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SideBarListService } from '../../services/side-bar-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchEmitter = new EventEmitter<string>();
  word: string = '';

  constructor(
    private sideBarListService: SideBarListService
  ) { }

  onSubmit(form: NgForm) {
    const word = form.value['word'];
  }

  onSearchChange(): void {
    this.sideBarListService.search(this.word)
  }

}