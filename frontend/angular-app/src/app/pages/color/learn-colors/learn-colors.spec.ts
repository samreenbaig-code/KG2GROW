import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnColorsComponent } from './learn-colors.component';

describe('LearnColors', () => {
  let component: LearnColorsComponent;
  let fixture: ComponentFixture<LearnColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnColorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
