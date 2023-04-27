import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBatchComponent } from './master-batch.component';

describe('MasterBatchComponent', () => {
  let component: MasterBatchComponent;
  let fixture: ComponentFixture<MasterBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
