import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {

  @ViewChild('frontend') selectedTemplate!: TemplateRef<any>;

  selectTemplate(template: TemplateRef<any>) {
    this.selectedTemplate = template;
  }

  getClass(template: TemplateRef<any>) {
    if(this.selectedTemplate == template)
      return "selected";
    return "";
  }
}
