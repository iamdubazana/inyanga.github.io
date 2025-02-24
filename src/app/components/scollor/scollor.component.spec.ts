import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScollorComponent } from './scollor.component';

describe('ScollorComponent', () => {
  let component: ScollorComponent;
  let fixture: ComponentFixture<ScollorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScollorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScollorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
