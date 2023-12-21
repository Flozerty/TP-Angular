import { Component } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SideBarListService } from '../../../services/side-bar-list.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrl: './reset-button.component.scss'
})
export class ResetButtonComponent {

  constructor(
    private selectionService: SelectionService,
    private sideBarListService: SideBarListService,
  ) { }

  reset() {
    this.sideBarListService.sideListSubject.next([]);
    this.selectionService.updateSelectedType('');
    this.selectionService.getBodiesBySelectedType();
    this.selectionService.updateSelectedPlanetAround('');
    this.selectionService.destroy$.next();
    this.selectionService.destroy$.complete();
  }
}
