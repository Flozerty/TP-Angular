import { Component, EventEmitter, Output } from '@angular/core';
import { BodiesService } from '../../services/bodies.service';
import { SelectionService } from '../../services/selection.service';
import { SideBarListService } from '../../services/side-bar-list.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() resetMethod = new EventEmitter<number>()
  constructor(
    private bodiesService: BodiesService,
    private selectionService: SelectionService,
    private sideBarListService: SideBarListService
  ) { }

  reset() {
    this.resetMethod.emit()
    this.sideBarListService.sideListSubject.next([])
    this.selectionService.updateSelectedType('')
    this.selectionService.getBodiesBySelectedType();

  }

}
