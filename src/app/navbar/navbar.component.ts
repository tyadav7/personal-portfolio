import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isScreenBig$:Observable<boolean>;
  showMenu:boolean = false;

  constructor(responsiveService: ResponsiveService) {
      this.isScreenBig$ = responsiveService.isScreenBig$;
  }

}
