import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BodiesService } from '../../../services/bodies.service';
import { SelectionService } from '../../../services/selection.service';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Subscription, takeUntil } from 'rxjs';
import { ButtonService } from '../../../services/button.service';

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
    private selectionService: SelectionService,
    private buttonService: ButtonService,
  ) { }

  ngOnInit(): void {
    this.buttonService.buttonNameChange('reset');

    this.selectionService.selectedBody$.pipe(takeUntil(this.selectionService.destroy$)).subscribe(body => {
      this.selectedBody = body;
      console.log(this.selectedBody);
    })

    const id: string = this.route.snapshot.paramMap.get('id') ?? '';
    if (id) {
      this.selectionService.findBodyById(id)
        .pipe(takeUntil(this.selectionService.destroy$))
        .subscribe(body => this.selectionService.selectedBodySubject.next(body))
    }
  }
}