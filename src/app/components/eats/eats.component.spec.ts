import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatsComponent } from './eats.component';

describe('EatsComponent', () => {
  let component: EatsComponent;
  let fixture: ComponentFixture<EatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
