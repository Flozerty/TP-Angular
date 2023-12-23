import { Injectable } from '@angular/core';
import { SideBarListService } from './side-bar-list.service';
import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(
    private sideBarListService: SideBarListService,
    private selectionService: SelectionService,
  ) { }
  resetMethod() {
    this.sideBarListService.sideListSubject.next([]);
    this.selectionService.selectedTypeSubject.next('');
    this.selectionService.selectedPlanetAroundSubject.next('');
    this.selectionService.destroy$.next();
    this.selectionService.destroy$.complete();
  }
}