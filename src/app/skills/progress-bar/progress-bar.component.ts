import {
  Component, HostBinding,
  Input
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() title: string = '';
  @Input() icon:string = '';

  @HostBinding('style.--target-width')
  public get targetWidth() {
    return this.value + '%';
  }
}
