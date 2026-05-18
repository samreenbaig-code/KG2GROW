import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLevel3 } from './number-level3.component';

describe('NumberLevel3', () => {
  let component: NumberLevel3;
  let fixture: ComponentFixture<NumberLevel3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberLevel3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberLevel3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
