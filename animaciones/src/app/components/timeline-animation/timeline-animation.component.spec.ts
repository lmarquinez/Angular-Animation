import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAnimationComponent } from './timeline-animation.component';

describe('TimelineAnimationComponent', () => {
  let component: TimelineAnimationComponent;
  let fixture: ComponentFixture<TimelineAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineAnimationComponent]
    });
    fixture = TestBed.createComponent(TimelineAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
