import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatirialtypeComponent } from './add-matirialtype.component';

describe('AddMatirialtypeComponent', () => {
  let component: AddMatirialtypeComponent;
  let fixture: ComponentFixture<AddMatirialtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMatirialtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatirialtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
