import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DChartComponent } from './d-chart.component';

describe('DChartComponent', () => {
  let component: DChartComponent;
  let fixture: ComponentFixture<DChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
