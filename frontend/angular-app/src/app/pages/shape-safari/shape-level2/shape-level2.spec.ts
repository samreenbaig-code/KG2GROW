import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeLevel2Component } from './shape-level2.component';

describe('ShapeLevel2', () => {
  let component: ShapeLevel2Component;
  let fixture: ComponentFixture<ShapeLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeLevel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeLevel2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
