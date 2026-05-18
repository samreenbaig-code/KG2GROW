import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleLevel2Component } from './puzzle-level2';

describe('PuzzleLevel2', () => {
  let component: PuzzleLevel2Component;
  let fixture: ComponentFixture<PuzzleLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleLevel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleLevel2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
