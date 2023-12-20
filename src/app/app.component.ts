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

  generateNewDate() {
    this.today = new Date();
  }

}
