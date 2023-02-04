import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  
  isScreenBig$:Observable<boolean>

  constructor(responsiveService: ResponsiveService) {
      this.isScreenBig$ = responsiveService.isScreenBig$;
      responsiveService.isScreenBig$.subscribe((value) => console.log(value));
  }

  ngOnInit() {
  }
}
