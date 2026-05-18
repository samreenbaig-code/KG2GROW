import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMatchingComponent } from './color-matching.component';

describe('ColorMatching', () => {
  let component: ColorMatchingComponent;
  let fixture: ComponentFixture<ColorMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorMatchingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorMatchingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
