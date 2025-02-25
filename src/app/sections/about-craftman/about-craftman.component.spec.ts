import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCraftmanComponent } from './about-craftman.component';

describe('AboutCraftmanComponent', () => {
  let component: AboutCraftmanComponent;
  let fixture: ComponentFixture<AboutCraftmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCraftmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCraftmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
