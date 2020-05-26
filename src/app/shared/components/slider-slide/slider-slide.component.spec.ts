import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSlideComponent } from './slider-slide.component';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

describe('SliderSlideComponent', () => {
  let component: SliderSlideComponent;
  let fixture: ComponentFixture<SliderSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
