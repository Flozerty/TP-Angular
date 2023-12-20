import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SideBarListService } from '../../services/side-bar-list.service';
import { SelectionService } from '../../services/selection.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor(private sideBarListService: SideBarListService, selectionService: SelectionService) {
    this.sideBarListService.sideList$.subscribe(list => this.bodiesList = list);
  }

  selectedPlanet: string = '[aucune sélection]';
  @Output() getBodyInfo = new EventEmitter<any>();
  @Input() today: Date = new Date();

  bodiesList: any[] = [];

  bodySelect(bodySelected: any[]) {
    this.getBodyInfo.emit(bodySelected);
  }
}