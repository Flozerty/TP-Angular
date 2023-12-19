import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor() { }

  @Input() selectedPlanet: string = '';
  @Input() selectedPlanetBodies: any | undefined = '';
  @Output() getBodyInfo = new EventEmitter<any>();
  @Input() today: Date = new Date();

  bodySelect(bodySelected: any[]) {
    this.getBodyInfo.emit(bodySelected);
  }
}