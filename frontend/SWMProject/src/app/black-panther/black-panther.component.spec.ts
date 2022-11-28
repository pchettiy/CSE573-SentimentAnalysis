import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPantherComponent } from './black-panther.component';

describe('BlackPantherComponent', () => {
  let component: BlackPantherComponent;
  let fixture: ComponentFixture<BlackPantherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackPantherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackPantherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
