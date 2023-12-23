import { Component } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SideBarListService } from '../../../services/side-bar-list.service';
import { ButtonService } from '../../../services/button.service';
import { ResetService } from '../../../services/reset.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrl: './reset-button.component.scss'
})
export class ResetButtonComponent {

  buttonName: string = '';

  constructor(private buttonService: ButtonService) {
    this.buttonService.button$.subscribe(name => this.buttonName = name)
  }
}