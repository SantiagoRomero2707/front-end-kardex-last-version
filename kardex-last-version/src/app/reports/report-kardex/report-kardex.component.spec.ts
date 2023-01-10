import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportKardexComponent } from './report-kardex.component';

describe('ReportKardexComponent', () => {
  let component: ReportKardexComponent;
  let fixture: ComponentFixture<ReportKardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportKardexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
