import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleLevel3 } from './puzzle-level3';

describe('PuzzleLevel3', () => {
  let component: PuzzleLevel3;
  let fixture: ComponentFixture<PuzzleLevel3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleLevel3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleLevel3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
