import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJoinComponent } from './about-join.component';

describe('AboutJoinComponent', () => {
  let component: AboutJoinComponent;
  let fixture: ComponentFixture<AboutJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
