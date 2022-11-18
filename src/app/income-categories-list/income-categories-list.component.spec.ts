import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCategoriesListComponent } from './income-categories-list.component';

describe('IncomeCategoriesListComponent', () => {
  let component: IncomeCategoriesListComponent;
  let fixture: ComponentFixture<IncomeCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeCategoriesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
