import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateSuitcaseFormComponent } from './create-suitcase-form.component';

describe('CreateSuitcaseFormComponent', () => {
  let component: CreateSuitcaseFormComponent;
  let fixture: ComponentFixture<CreateSuitcaseFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSuitcaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSuitcaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
