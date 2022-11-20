import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesYearComponent } from './balances-year.component';

describe('BalancesYearComponent', () => {
  let component: BalancesYearComponent;
  let fixture: ComponentFixture<BalancesYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancesYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancesYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
