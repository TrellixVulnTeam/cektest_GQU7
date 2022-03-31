import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeedataComponent } from './newemployeedata.component';

describe('NewemployeedataComponent', () => {
  let component: NewemployeedataComponent;
  let fixture: ComponentFixture<NewemployeedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewemployeedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewemployeedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
