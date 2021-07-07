import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehearseComponent } from './rehearse.component';

describe('RehearseComponent', () => {
  let component: RehearseComponent;
  let fixture: ComponentFixture<RehearseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehearseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehearseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
