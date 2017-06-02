import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceDetectionComponent } from './face-detection.component';

describe('FaceDetectionComponent', () => {
  let component: FaceDetectionComponent;
  let fixture: ComponentFixture<FaceDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
