import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesMonthComponent } from './balances-month.component';

describe('BalancesMonthComponent', () => {
  let component: BalancesMonthComponent;
  let fixture: ComponentFixture<BalancesMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancesMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancesMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
