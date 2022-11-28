import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassOnionComponent } from './glass-onion.component';

describe('GlassOnionComponent', () => {
  let component: GlassOnionComponent;
  let fixture: ComponentFixture<GlassOnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassOnionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassOnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
