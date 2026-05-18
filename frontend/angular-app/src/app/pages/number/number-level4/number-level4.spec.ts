import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLevel4 } from './number-level4.component';

describe('NumberLevel4', () => {
  let component: NumberLevel4;
  let fixture: ComponentFixture<NumberLevel4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberLevel4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberLevel4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
