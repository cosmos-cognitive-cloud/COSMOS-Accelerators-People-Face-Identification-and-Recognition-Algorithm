import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceVerificationComponent } from './face-verification.component';

describe('FaceVerificationComponent', () => {
  let component: FaceVerificationComponent;
  let fixture: ComponentFixture<FaceVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
