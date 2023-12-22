import { Component } from '@angular/core';
import { ButtonService } from '../../services/button.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private buttonService: ButtonService) { }

  ngOnInit(): void {
    this.buttonService.buttonNameChange('reset');
  }
}