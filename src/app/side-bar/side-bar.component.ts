import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor() { }

  @Input() selectedPlanetBodies: any | undefined = 'La Terre';
  @Output() getBodyInfo = new EventEmitter<any>()
  selectedBody: any[] = []
  @Input() today: Date = new Date();

  getPlanetName(): string {
    if (this.selectedPlanetBodies && this.selectedPlanetBodies.length > 0) {

      return this.selectedPlanetBodies[0].aroundPlanet ?
        this.selectedPlanetBodies[0].aroundPlanet.planet.toUpperCase() : '[Choisissez une planète]';

    } else {
      return '[Choisissez une planète]';
    }
  }
  bodySelect(bodySelected: any[]) {
    this.selectedBody = bodySelected;
    this.getBodyInfo.emit(this.selectedBody);
  }
}
