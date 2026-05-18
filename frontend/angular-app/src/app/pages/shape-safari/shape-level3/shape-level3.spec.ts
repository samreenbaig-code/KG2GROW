import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeLevel3 } from './shape-level3.component';

describe('ShapeLevel3', () => {
  let component: ShapeLevel3;
  let fixture: ComponentFixture<ShapeLevel3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeLevel3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeLevel3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
