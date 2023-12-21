import { Component, Input } from '@angular/core';
import { SideBarListService } from '../../services/side-bar-list.service';
import { SelectionService } from '../../services/selection.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor(
    private sideBarListService: SideBarListService,
    private selectionService: SelectionService
  ) {
    this.sideBarListService.sideList$.subscribe(list => this.bodiesList = list);
    this.selectionService.selectedPlanetAround$.subscribe(body => this.selection = body)
    this.sideBarListService.searchWord$.subscribe(word => this.selection = word)
  }

  selection: string = '';
  today: Date = new Date();

  bodiesList: any[] = [];

  bodySelect(bodySelected: any[]) {
    this.selectionService.updateSelectedBody(bodySelected)
  }
}