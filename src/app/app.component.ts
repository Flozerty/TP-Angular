import { Component } from '@angular/core';
import { BodiesService } from './services/bodies.service';
import { SelectionService } from './services/selection.service';
import { SideBarListService } from './services/side-bar-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private bodiesServices: BodiesService,
    private selectionService: SelectionService,
    private sideBarListService: SideBarListService
  ) { }

  title = 'TP-Angular';

  today: Date = new Date();
  selectedPlanetBodies: any[] = [];
  selectedPlanet: string = '[Choisissez une planète]';
  selectedBody: any[] | undefined = undefined;

  fonctionReset() {
    this.selectedBody = undefined;
    this.selectedPlanetBodies = [];
    this.selectedPlanet = "[Choisissez une planète]";
    this.generateNewDate();
  }

  getPlanetBodies(bodies: any[]) {
    this.selectedPlanetBodies = bodies;
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

}
