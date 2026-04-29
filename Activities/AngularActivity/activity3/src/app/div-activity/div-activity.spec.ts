import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivActivity } from './div-activity';

describe('DivActivity', () => {
  let component: DivActivity;
  let fixture: ComponentFixture<DivActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivActivity],
    }).compileComponents();

    fixture = TestBed.createComponent(DivActivity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
