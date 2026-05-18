import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcLevel3Component } from './abc-level3.component';

describe('AbcLevel3', () => {
  let component: AbcLevel3Component;
  let fixture: ComponentFixture<AbcLevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcLevel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcLevel3Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
