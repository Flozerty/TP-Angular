import { Component } from '@angular/core';
import { ButtonService } from '../../services/button.service';
import { ResetService } from '../../services/reset.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private buttonService: ButtonService, private resetService: ResetService) { }

  ngOnInit(): void {
    this.buttonService.buttonNameChange('reset');
    this.resetService.resetMethod()
  }
}