import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecvdataComponent } from './employeecvdata.component';

describe('EmployeecvdataComponent', () => {
  let component: EmployeecvdataComponent;
  let fixture: ComponentFixture<EmployeecvdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeecvdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecvdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
