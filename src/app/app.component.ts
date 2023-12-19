import { Component } from '@angular/core';
import { BodiesService } from './services/bodies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private bodiesServices: BodiesService) { }

  title = 'TP-Angular';

  today: Date = new Date();
  selectedPlanetBodies: any[] = [];
  selectedPlanet: string = '[Choisissez une planète]';
  selectedBody: any[] | undefined = undefined;
  selectedBodiesFiltered: any = [];
  selectedType: string = this.bodiesServices.selectedTypeSubject.value


  fonctionReset() {
    console.log(this.selectedType)
    this.selectedBody = undefined;
    this.selectedBodiesFiltered = [];
    this.selectedPlanetBodies = [];
    this.selectedPlanet = "[Choisissez une planète]";
    this.bodiesServices.selectedType = 'aucun type'
    this.generateNewDate();
    this.bodiesServices.getBodiesBySelectedType();
    console.log(this.selectedType)
  }

  getPlanetBodies(bodies: any[]) {
    this.selectedPlanetBodies = bodies;
    this.selectedBodiesFiltered = bodies;
    this.generateNewDate();
  }

  usePlanetName(name: string) {
    this.selectedPlanet = name;
  }

  getType(type: string) {
    this.selectedType = type;
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

    for (let body of this.bodiesServices.data) {

      if (body.id.includes(searchName.toLowerCase()) || body.name.toLowerCase().includes(searchName.toLowerCase()) || body.alternativeName.includes(searchName.toLowerCase()) || body.englishName.toLowerCase().includes(searchName.toLowerCase())) {
        this.selectedBodiesFiltered.push(body);
      }
    }
  }
}
