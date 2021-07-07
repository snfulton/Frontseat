import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStructComponent } from './main-struct.component';

describe('MainStructComponent', () => {
  let component: MainStructComponent;
  let fixture: ComponentFixture<MainStructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStructComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
