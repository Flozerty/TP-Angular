import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BodiesService } from '../../services/bodies.service';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-selected-body-infos',
  templateUrl: './selected-body-infos.component.html',
  styleUrl: './selected-body-infos.component.scss'
})
export class SelectedBodyInfosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bodiesService: BodiesService, private selectionService: SelectionService) { }

  @Input() selectedBody: any = [];

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.selectedBody = this.selectionService.updateSelectedBody(id)
  }
}
