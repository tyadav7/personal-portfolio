import { Component, Input } from '@angular/core';
import { experienceFromToInWords, totalExperienceInWords } from '../timeline/timeline-utility';

@Component({
  selector: 'app-timeline-sub',
  templateUrl: './timeline-sub.component.html',
  styleUrls: ['./timeline-sub.component.scss']
})
export class TimelineSubComponent {

  @Input() roles: Array<Role> = [];
  experienceFromToInWords = (from: Date, to: Date) => experienceFromToInWords(from, to);
  totalExperienceInWords = (from: Date, to: Date) => totalExperienceInWords(from, to);
}

export interface Role {
  name: string;
  enabled: boolean;
  to: Date;
  from: Date;
  content: Array<string>;
}