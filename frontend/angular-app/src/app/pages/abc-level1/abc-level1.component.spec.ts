import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbcLevel1Component } from './abc-level1.component';

describe('AbcLevel1Component', () => {
  let component: AbcLevel1Component;
  let fixture: ComponentFixture<AbcLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcLevel1Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AbcLevel1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});