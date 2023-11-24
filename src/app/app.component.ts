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
  selectedBody: any[] | undefined = undefined;

  fonctionReset() {
    this.selectedBody = undefined;
    this.selectedPlanetBodies = [];
    this.generateNewDate();
  }

  getPlanetBodies(bodies: any[]) {
    this.selectedPlanetBodies = bodies;
    this.generateNewDate();
  }

  getBodyInfo(body: any[]) {
    this.selectedBody = body;
    this.generateNewDate();
  }

  generateNewDate() {
    this.today = new Date;
  }
}
