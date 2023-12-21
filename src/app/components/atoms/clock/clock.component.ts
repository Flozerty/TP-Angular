import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit {

  time: number = Date.now()
  seg: boolean = false;
  ngOnInit(): void {

    window.setInterval(() => {
      this.time = Date.now();
      this.seg = !this.seg;
    }, 500)

  }
}
