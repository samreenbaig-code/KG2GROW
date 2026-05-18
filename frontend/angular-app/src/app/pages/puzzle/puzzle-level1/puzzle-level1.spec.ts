import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleLevel1Component } from './puzzle-level1';

describe('PuzzleLevel1', () => {
  let component: PuzzleLevel1Component;
  let fixture: ComponentFixture<PuzzleLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleLevel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleLevel1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
