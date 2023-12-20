import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BodiesService } from './bodies.service';
import { SideBarListService } from './side-bar-list.service';
@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor(private bodiesService: BodiesService, private sideBarListService: SideBarListService) { }

  public selectedTypeSubject = new BehaviorSubject<string>('');
  selectedType$: Observable<string> = this.selectedTypeSubject.asObservable();

  public selectedPlanetAroundSubject = new BehaviorSubject<string>('');
  selectedPlanetAround$: Observable<string> = this.selectedTypeSubject.asObservable();

  public selectedBodySubject = new BehaviorSubject<string>('');
  selectedBody$: Observable<string> = this.selectedTypeSubject.asObservable();

  updateSelectedType(type: string) {
    this.selectedTypeSubject.next(type)
  }
  getBodiesBySelectedType() {
    let bodiesSelected: any[] = this.bodiesService.data.filter(body => body.bodyType === this.selectedTypeSubject.value);
    return bodiesSelected;
  }

  updateSelectedPlanetAround(body: string) {
    this.selectedPlanetAroundSubject.next(body);
    this.sideBarListService.updateSelectedPlanetMoons(body);
  }

  updateSelectedBody(body: string) {
    this.selectedBodySubject.next(body)
  }
}
