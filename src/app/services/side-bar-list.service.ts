import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BodiesService } from './bodies.service';

@Injectable({
  providedIn: 'root'
})
export class SideBarListService {

  constructor(private bodiesService: BodiesService) { }

  public sideListSubject = new BehaviorSubject<any[]>([]);
  sideList$: Observable<any[]> = this.sideListSubject.asObservable();

  updateSelectedPlanetMoons(name: string) {
    const list: any[] = [];
    for (const body of this.bodiesService.data) {
      if (body.aroundPlanet?.planet.toLowerCase() === name.toLowerCase()) {
        list.push(body);
      }
      if (body.aroundPlanet?.planet === "terre" && name.toLowerCase() === "la terre")
        list.push(body);
    }
    this.sideListSubject.next(list);
    console.log(this.sideListSubject.value)
  }

  search(search: string) {
    const list: any[] = [];
    if (search) {

      for (let body of this.bodiesService.data) {

        if (body.id.includes(search.toLowerCase()) || body.name.toLowerCase().includes(search.toLowerCase()) || body.alternativeName.includes(search.toLowerCase()) || body.englishName.toLowerCase().includes(search.toLowerCase())) {
          list.push(body);
        }
      }
    }
    this.sideListSubject.next(list);
    console.log(this.sideListSubject.value)
  }

}

