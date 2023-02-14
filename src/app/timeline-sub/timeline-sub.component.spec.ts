import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSubComponent } from './timeline-sub.component';

describe('TimelineSubComponent', () => {
  let component: TimelineSubComponent;
  let fixture: ComponentFixture<TimelineSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
