import { Component } from '@angular/core';
import { Role } from '../timeline-sub/timeline-sub.component';
import { Job } from '../timeline/timeline.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  roles:Array<Role> = []

  constructor(){
    this.roles = [{
      enabled: false,
      name: 'Bachelors of Technology, Computer Science and Engineering',
      subtitle: 'Manav Rachna College of Engineering',
      from: new Date('4/1/2011'),
      to: new Date('3/31/2015'),
      content : []
    },
    {
      enabled: false,
      name: 'Senior Secondary 12th',
      subtitle: 'Blue Bells Model School',
      from: new Date('4/1/2010'),
      to: new Date('3/31/2011'),
      content : []
    },
    {
      enabled: false,
      name: 'Higher Secondary 10th',
      subtitle: 'Blue Bells Model School',
      from: new Date('4/1/2008'),
      to: new Date('3/31/2009'),
      content : []
    } 
  ]
  }
}
