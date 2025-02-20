import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScollerTopComponent } from './scoller-top.component';

describe('ScollerTopComponent', () => {
  let component: ScollerTopComponent;
  let fixture: ComponentFixture<ScollerTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScollerTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScollerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
