import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Abc } from './abc.component';

describe('Abc', () => {
  let component: Abc;
  let fixture: ComponentFixture<Abc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abc]
    }).compileComponents();

    fixture = TestBed.createComponent(Abc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});