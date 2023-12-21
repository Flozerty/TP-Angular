import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BodiesService } from '../../services/bodies.service';
import { SelectionService } from '../../services/selection.service';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-selected-body-infos',
  templateUrl: './selected-body-infos.component.html',
  styleUrl: './selected-body-infos.component.scss'
})
export class SelectedBodyInfosComponent implements OnInit {

  selectedBody: any = '';
  private selectedTest!: Subscription

  constructor(
    private route: ActivatedRoute,
    private bodiesService: BodiesService,
    private selectionService: SelectionService
  ) {

  }

  ngOnInit(): void {

    this.selectedBody = ''
    this.selectionService.selectedBody$.pipe(takeUntil(this.selectionService.destroy$)).subscribe(body => {
      this.selectedBody = body;
      /* console.log(this.selectedBody) */
    })

    const id: string = this.route.snapshot.paramMap.get('id') ?? '';
    if (id) {
      this.selectionService
        .findBodyById(id)
        .pipe(takeUntil(this.selectionService.destroy$))
        .subscribe(body => this.selectionService.selectedBodySubject.next(body))
    }
  }
}