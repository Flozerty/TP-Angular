import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BodiesService } from './bodies.service';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor(private bodiesService: BodiesService) { }

  public selectedType: string = ''

  public selectedTypeSubject = new BehaviorSubject<string>('');
  selectedType$: Observable<string> = this.selectedTypeSubject.asObservable();

  public selectedPlanetAroundSubject = new BehaviorSubject<string>('');
  selectedPlanetAround$: Observable<string> = this.selectedTypeSubject.asObservable();

  public selectedBodySubject = new BehaviorSubject<string>('');
  selectedBody$: Observable<string> = this.selectedTypeSubject.asObservable();

  updateSelectedType(type: string) {
    this.selectedTypeSubject.next(type)
    this.selectedType = type
  }
  getBodiesBySelectedType() {
    let bodiesSelected: any[] = this.bodiesService.data.filter(body => body.bodyType === this.selectedTypeSubject.value);
    return bodiesSelected;
  }
}
