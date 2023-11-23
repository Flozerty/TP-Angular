import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {

  planets: any = { bodies: [] };



  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any>('https://api.le-systeme-solaire.net/rest/bodies/').subscribe((data: any) => {
      this.planets.bodies = data.bodies;
      console.log(this.planets);
    });
  }
}