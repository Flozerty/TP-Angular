import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() testMethode = new EventEmitter<number>()
  constructor() { }

  methode(ere: number) {
    this.testMethode.emit(ere)
  }
}
