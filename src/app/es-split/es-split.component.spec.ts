import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsSplitComponent } from './es-split.component';

describe('EsSplitComponent', () => {
  let component: EsSplitComponent;
  let fixture: ComponentFixture<EsSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
