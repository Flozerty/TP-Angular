import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {

  planets: any[] = [];
  bodiesOfPlanet: any[] = []

  @Output() getPlanetsByName = new EventEmitter<any>()

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any>('https://api.le-systeme-solaire.net/rest/bodies/').subscribe((data: any) => {
      this.planets = data.bodies;
      console.log(this.planets);
    });
  }

  planetName(planetName: any) {
    this.bodiesOfPlanet = [];

    for (const body of this.planets) {
      if (body.aroundPlanet?.planet.toLowerCase() === planetName.toLowerCase()) {
        this.bodiesOfPlanet.push(body);
      }
      if (body.aroundPlanet?.planet === "terre" && planetName.toLowerCase() === "la terre")
        this.bodiesOfPlanet.push(body);
    }

    console.log(this.bodiesOfPlanet)
    console.log(planetName)
    this.getPlanetsByName.emit(this.bodiesOfPlanet);

  }


}