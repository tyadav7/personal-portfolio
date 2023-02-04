import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  isScreenBig$:Observable<boolean>

  constructor(responsiveService: ResponsiveService) {
      this.isScreenBig$ = responsiveService.isScreenBig$;
  }

}
