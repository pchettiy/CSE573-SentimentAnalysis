import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackAdamComponent } from './black-adam.component';

describe('BlackAdamComponent', () => {
  let component: BlackAdamComponent;
  let fixture: ComponentFixture<BlackAdamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackAdamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackAdamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
