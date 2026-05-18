import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcLevel4Component } from './abc-level4.component';

describe('AbcLevel4', () => {
  let component: AbcLevel4Component;
  let fixture: ComponentFixture<AbcLevel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcLevel4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcLevel4Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
