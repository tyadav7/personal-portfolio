import { Component, Input } from '@angular/core';
import { Role } from '../timeline-sub/timeline-sub.component';
import { totalExperienceInWords, experienceFromToInWords } from './timeline-utility';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  @Input() title: string = "Professional Experience"
  @Input() jobs: Array<Job> = [];

  totalExperienceInWords = (from: Date,to: Date) => totalExperienceInWords(from,to);
  experienceFromToInWords = (from: Date,to: Date) => experienceFromToInWords(from,to);
  
}
export interface Job {
  image: string;
  roles: Array<Role>;
  from: Date;
  to: Date
}


