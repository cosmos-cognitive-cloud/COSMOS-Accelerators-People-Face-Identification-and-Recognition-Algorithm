import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceViewerComponent } from './face-viewer.component';

describe('FaceViewerComponent', () => {
  let component: FaceViewerComponent;
  let fixture: ComponentFixture<FaceViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
