import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BodiesService } from '../../services/bodies.service';

@Component({
  selector: 'app-body-selection',
  templateUrl: './body-selection.component.html',
  styleUrl: './body-selection.component.scss'
})
export class BodySelectionComponent implements OnInit {

  bodiesOfPlanet: any[] = [];
  bodiesTypes: string[] = [];
  allBodies: any[] = [];

  selectedType = this.bodiesService.selectedType;

  bodiesBySelectedType: any[] | undefined = this.bodiesService.getBodiesBySelectedType();

  @Output() getPlanetsByName = new EventEmitter<any[]>()
  @Output() getPlanetName = new EventEmitter<string>()
  @Output() getType = new EventEmitter<string>()

  @Input() selectedPlanet: string = '';


  constructor(private bodiesService: BodiesService,) { }

  ngOnInit() {



    this.bodiesService.getData().subscribe(data => {
      this.allBodies = data.bodies;
      this.bodiesService.data = data.bodies;
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

    for (const body of this.allBodies) {
      if (body.aroundPlanet?.planet.toLowerCase() === planetName.toLowerCase() || body.aroundPlanet?.planet.toLowerCase() === planetName.toLowerCase()) {
        this.bodiesOfPlanet.push(body);
      }
      if (body.aroundPlanet?.planet === "terre" && planetName.toLowerCase() === "la terre")
        this.bodiesOfPlanet.push(body);
    }

    this.getPlanetsByName.emit(this.bodiesOfPlanet);
    this.getPlanetName.emit(this.selectedPlanet);
  }

  selectAType(type: string) {
    this.bodiesService.selectedType = type;
    this.bodiesBySelectedType = this.bodiesService.getBodiesBySelectedType()

    this.getType.emit(this.bodiesService.selectedType)
  }


}