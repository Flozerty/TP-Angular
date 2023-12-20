import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BodiesService } from '../../services/bodies.service';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-body-selection',
  templateUrl: './body-selection.component.html',
  styleUrl: './body-selection.component.scss'
})
export class BodySelectionComponent implements OnInit {

  constructor(
    private bodiesService: BodiesService,
    private selectionService: SelectionService
  ) { }

  bodiesOfPlanet: any[] = [];
  bodiesTypes: string[] = [];

  selectedType: string = '';
  selectedPlanet: string = '';

  bodiesBySelectedType: any[] | undefined = this.selectionService.getBodiesBySelectedType();

  ngOnInit() {
    this.bodiesService.getData().subscribe(data => {
      this.bodiesService.data = data.bodies;
    });

    this.bodiesService.getAllBodyTypes().subscribe((types: string[]) => {
      this.bodiesTypes = types;
    })

    this.selectionService.selectedType$.subscribe(type => {
      this.selectedType = type;
      this.bodiesBySelectedType = this.selectionService.getBodiesBySelectedType();
    })

    this.selectionService.selectedPlanetAround$.subscribe(planet => {
      this.selectedPlanet = planet;
      this.bodiesOfPlanet = this.selectionService.getBodiesBySelectedType();
    })
  }

  selectAPlanet(planetName: string) {
    this.selectionService.updateSelectedPlanetAround(planetName);
  }

  selectAType(type: string) {
    this.selectionService.updateSelectedType(type);
    this.bodiesBySelectedType = this.selectionService.getBodiesBySelectedType()

  }

}