import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkchartsComponent } from './markcharts.component';

describe('MarkchartsComponent', () => {
  let component: MarkchartsComponent;
  let fixture: ComponentFixture<MarkchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
