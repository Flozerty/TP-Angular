import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BodiesService } from '../bodies.service';

@Component({
  selector: 'app-body-selection',
  templateUrl: './body-selection.component.html',
  styleUrl: './body-selection.component.scss'
})
export class BodySelectionComponent implements OnInit {

  planets: any[] = [];
  bodiesOfPlanet: any[] = [];
  selectedPlanet: string = '';
  bodiesTypes: string[] = [];
  AllBodies: any[] = []

  @Output() getPlanetsByName = new EventEmitter<any[]>()
  @Output() getPlanetName = new EventEmitter<string>()

  constructor(private bodiesService: BodiesService,) { }

  ngOnInit() {

    this.bodiesService.getData().subscribe(data => {
      this.AllBodies = data.bodies
      console.log(this.AllBodies)
    });

    this.bodiesService.getAllBodyTypes().subscribe((types: string[]) => {
      this.bodiesTypes = types;
      console.log(this.bodiesTypes)
    })
  }

  planetName(planetName: string) {
    this.bodiesOfPlanet = [];
    this.selectedPlanet = planetName;

    for (const body of this.planets) {
      if (body.aroundPlanet?.planet.toLowerCase() === planetName.toLowerCase()) {
        this.bodiesOfPlanet.push(body);
      }
      if (body.aroundPlanet?.planet === "terre" && planetName.toLowerCase() === "la terre")
        this.bodiesOfPlanet.push(body);
    }

    this.getPlanetsByName.emit(this.bodiesOfPlanet);
    this.getPlanetName.emit(this.selectedPlanet);
  }


}