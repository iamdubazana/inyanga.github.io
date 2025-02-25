import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGridComponent } from './filter-grid.component';

describe('FilterGridComponent', () => {
  let component: FilterGridComponent;
  let fixture: ComponentFixture<FilterGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
