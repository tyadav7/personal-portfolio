import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMenu:boolean = false;
}
