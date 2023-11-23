import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() { }

  title = 'TP-Angular';

  num: number = 0;
  selectedPlanetBodies: any[] = [];
  selectedBody: any[] | undefined = undefined;

  fonctionTest(x: number) {
    this.num = x;
  }

  getPlanetBodies(bodies: any[]) {
    this.selectedPlanetBodies = bodies;
  }

  getBodyInfo(body: any[]) {
    this.selectedBody = body;
  }

}
