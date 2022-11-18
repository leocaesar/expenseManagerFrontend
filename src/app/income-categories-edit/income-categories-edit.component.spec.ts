import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCategoriesEditComponent } from './income-categories-edit.component';

describe('IncomeCategoriesEditComponent', () => {
  let component: IncomeCategoriesEditComponent;
  let fixture: ComponentFixture<IncomeCategoriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeCategoriesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeCategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
