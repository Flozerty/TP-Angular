import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodiesService {

  constructor(private http: HttpClient) { }

  public selectedType: string = 'aucun type';
  public data: any[] = [];

  getData(): Observable<any> {
    return this.http.get<any>('https://api.le-systeme-solaire.net/rest/bodies?exclude=,argPeriapsis,mainAnomaly,longAscNode,rel,avgTemp,vol');
  }

  getBodiesByType(bodies: any[], bodyType: string): any[] {
    return bodies.filter(body => { body.bodyType === bodyType });
  }

  getAllBodyTypes(): Observable<string[]> {
    return this.getData().pipe(
      map((data): any => {
        const bodiesTypes = new Set<string>();
        for (const body of data.bodies) {
          bodiesTypes.add(body.bodyType);
        }

        return Array.from(bodiesTypes);
      })
    );
  }

  getBodiesBySelectedType() {
    let bodiesSelected: any[] = this.data.filter(body => body.bodyType === this.selectedType);
    return bodiesSelected;
  }
}