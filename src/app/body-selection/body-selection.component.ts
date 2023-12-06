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
  bodiesTypes: string[] = [];
  selectedType: string = ''
  AllBodies: any[] = [];

  @Output() getPlanetsByName = new EventEmitter<any[]>()
  @Output() getPlanetName = new EventEmitter<string>()
  @Input() selectedPlanet: string = ''

  constructor(private bodiesService: BodiesService,) { }

  ngOnInit() {

    this.bodiesService.getData().subscribe(data => {
      this.AllBodies = data.bodies
    });

    this.bodiesService.getAllBodyTypes().subscribe((types: string[]) => {
      this.bodiesTypes = types;
      console.log(this.bodiesTypes)
    })
  }

  planetName(planetName: string) {
    this.bodiesOfPlanet = [];
    this.selectedPlanet = planetName;
    console.log(this.selectedPlanet)

    for (const body of this.AllBodies) {
      if (body.aroundPlanet?.planet.toLowerCase() === planetName.toLowerCase()) {
        this.bodiesOfPlanet.push(body);
      }
      if (body.aroundPlanet?.planet === "terre" && planetName.toLowerCase() === "la terre")
        this.bodiesOfPlanet.push(body);
    }

    this.getPlanetsByName.emit(this.bodiesOfPlanet);
    this.getPlanetName.emit(this.selectedPlanet);
  }

  selectType(type: string) {
    this.selectedType = type;
  }


}