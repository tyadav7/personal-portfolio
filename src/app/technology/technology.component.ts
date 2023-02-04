import { Component, ViewChild } from '@angular/core';
import { delay, map, Observable, startWith } from 'rxjs';
import { MatProgressBar } from '@angular/material/progress-bar'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent {

  ngAfterViewInit(): void {
  }
}
