import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as Aos from 'aos';

@Component({
  selector: 'body[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    Aos.init({
    });
  }

  title = 'portfolio';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.addIcon('logo');
    this.addIcon('ts');
    this.addIcon('js');
    this.addIcon('db');
    this.addIcon('server');
    this.addIcon('cloud');
    this.addIcon('de');
    this.addIcon('angular');
    this.addIcon('material');
    this.addIcon('html');
    this.addIcon('css');
    this.addIcon('js-color');
    this.addIcon('kendo');
    this.addIcon('java');
    this.addIcon('spring');
    this.addIcon('micro');
    this.addIcon('elk');
    this.addIcon('kafka');
    this.addIcon('hibernate');
    this.addIcon('sql');
    this.addIcon('mongo');
    this.addIcon('postgre');
    this.addIcon('jenkins');
    this.addIcon('docker');
    this.addIcon('kubernetes');
    this.addIcon('spark');
    this.addIcon('linux');
    this.addIcon('git');
    this.addIcon('windows');
    this.addIcon('jira');
    this.addIcon('twitter');
    this.addIcon('linkedin');
    this.addIcon('stackoverflow');
    this.addIcon('github');
    this.addIcon('reactive');
  }

  private addIcon(label: string) {
    this.matIconRegistry.addSvgIcon(
      label,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/img/' + label + '.svg'
      )
    );
  }
}
