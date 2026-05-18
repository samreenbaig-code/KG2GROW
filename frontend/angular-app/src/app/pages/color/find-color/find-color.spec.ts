import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindColorComponent } from './find-color.component';

describe('FindColor', () => {
  let component: FindColorComponent;
  let fixture: ComponentFixture<FindColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindColorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
