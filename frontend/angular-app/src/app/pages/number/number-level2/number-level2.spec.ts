import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLevel2Component } from './number-level2.component';

describe('NumberLevel2', () => {
  let component: NumberLevel2Component;
  let fixture: ComponentFixture<NumberLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberLevel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberLevel2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
