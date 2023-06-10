import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Css3dAnimationComponent } from './css3d-animation.component';

describe('Css3dAnimationComponent', () => {
  let component: Css3dAnimationComponent;
  let fixture: ComponentFixture<Css3dAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Css3dAnimationComponent]
    });
    fixture = TestBed.createComponent(Css3dAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
