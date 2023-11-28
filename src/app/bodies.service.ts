import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BodiesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('https://api.le-systeme-solaire.net/rest/bodies?exclude=,argPeriapsis,mainAnomaly,longAscNode,rel,avgTemp,vol');
  }
}