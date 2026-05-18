import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLevel1Component } from './number-level1.component';

describe('NumberLevel1', () => {
  let component: NumberLevel1Component;
  let fixture: ComponentFixture<NumberLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberLevel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberLevel1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
