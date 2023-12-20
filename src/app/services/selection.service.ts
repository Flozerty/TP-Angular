import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BodiesService } from './bodies.service';
@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor(private bodiesService: BodiesService) { }

  public selectedTypeSubject = new BehaviorSubject<string>('');
  selectedType$: Observable<string> = this.selectedTypeSubject.asObservable();

  public selectedPlanetAroundSubject = new BehaviorSubject<string>('');
  selectedPlanetAround$: Observable<string> = this.selectedPlanetAroundSubject.asObservable();

  public selectedBodySubject = new BehaviorSubject<any>('');
  selectedBody$: Observable<any> = this.selectedBodySubject.asObservable();

  updateSelectedType(type: string) {
    this.selectedTypeSubject.next(type)
  }
  getBodiesBySelectedType() {
    let bodiesSelected: any[] = this.bodiesService.data.filter(body => body.bodyType === this.selectedTypeSubject.value);
    return bodiesSelected;
  }

  updateSelectedPlanetAround(body: string) {
    this.selectedPlanetAroundSubject.next(body);
  }

  updateSelectedBody(body: any) {
    this.selectedBodySubject.next(body)
  }
}
