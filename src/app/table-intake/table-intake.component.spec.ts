import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIntakeComponent } from './table-intake.component';

describe('TableIntakeComponent', () => {
  let component: TableIntakeComponent;
  let fixture: ComponentFixture<TableIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIntakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
