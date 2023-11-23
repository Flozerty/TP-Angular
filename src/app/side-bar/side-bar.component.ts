import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor() { }


  @Input() selectedPlanetBodies: any | undefined = 'La Terre';


  getPlanetName(): string {
    if (this.selectedPlanetBodies && this.selectedPlanetBodies.length > 0) {

      return this.selectedPlanetBodies[0].aroundPlanet ?
        this.selectedPlanetBodies[0].aroundPlanet.planet.toUpperCase() : 'Aucune donnée';

    } else {
      return 'Aucune donnée';
    }
  }
}
