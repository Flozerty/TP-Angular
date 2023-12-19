import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() resetMethod = new EventEmitter<number>()
  constructor() { }

  reset() {
    this.resetMethod.emit()
  }

}
