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

  selectedBody: any = '';

  constructor(
    private route: ActivatedRoute,
    private bodiesService: BodiesService,
    private selectionService: SelectionService
  ) {
    this.selectionService.selectedBody$.subscribe(body => {
      this.selectedBody = body;
      console.log(this.selectedBody)
    })
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') ?? '';
    id ?
      this.selectionService.findBodyById(id).subscribe(body => this.selectionService.selectedBodySubject.next(body))
      : this.selectedBody = '';
  }
}
//conflit : ligne 20 et 28 selectedBody$ 2 differents, 1st = ok