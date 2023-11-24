import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() { }

  title = 'TP-Angular';

  today: Date = new Date();
  selectedPlanetBodies: any[] = [];
  selectedPlanet: string = '[Choisissez une planète]';
  selectedBody: any[] | undefined = undefined;
  selectedBodiesFiltered: any = [];


  fonctionReset() {
    this.selectedBody = undefined;
    this.selectedBodiesFiltered = [];
    this.selectedPlanetBodies = [];
    this.selectedPlanet = "[Choisissez une planète]";
    this.generateNewDate();
  }

  getPlanetBodies(bodies: any[]) {
    this.selectedPlanetBodies = bodies;
    this.selectedBodiesFiltered = bodies;
    this.generateNewDate();
  }

  usePlanetName(name: string) {
    this.selectedPlanet = name;
  }

  getBodyInfo(body: any[]) {
    this.selectedBody = body;
    this.generateNewDate();
  }

  generateNewDate() {
    this.today = new Date();
  }

  updateList(searchName: string) {

    this.selectedPlanet = searchName;
    this.selectedBodiesFiltered = [];

    for (let body of this.selectedPlanetBodies) {

      if (body.id.includes(searchName.toLowerCase()) || body.name.toLowerCase().includes(searchName.toLowerCase()) || body.alternativeName.includes(searchName.toLowerCase())) {
        this.selectedBodiesFiltered.push(body);
      }
    }
  }
}
