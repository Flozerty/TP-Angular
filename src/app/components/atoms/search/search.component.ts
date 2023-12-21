import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SideBarListService } from '../../../services/side-bar-list.service';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  word: string = '';

  constructor(
    private selectionService: SelectionService,
    private sideBarListService: SideBarListService
  ) { }

  onSubmit(form: NgForm) {
    const word = form.value['word'];
  }

  onSearchChange(): void {
    this.sideBarListService.search(this.word)
  }

}