import { Component, EventEmitter, Output } from '@angular/core';
import { BodiesService } from '../../services/bodies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() resetMethod = new EventEmitter<number>()
  constructor(private bodiesService: BodiesService) { }

  reset() {
    this.resetMethod.emit()
    this.bodiesService.updateSelectedType('')
  }

}
