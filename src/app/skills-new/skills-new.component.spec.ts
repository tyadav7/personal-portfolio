import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsNewComponent } from './skills-new.component';

describe('SkillsNewComponent', () => {
  let component: SkillsNewComponent;
  let fixture: ComponentFixture<SkillsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
