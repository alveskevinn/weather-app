import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaterHomeComponent } from './weather-home.component';

describe('WeaterHomeComponent', () => {
  let component: WeaterHomeComponent;
  let fixture: ComponentFixture<WeaterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaterHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
