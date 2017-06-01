import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingAutosuggestComponent } from './bing-autosuggest.component';

describe('BingAutosuggestComponent', () => {
  let component: BingAutosuggestComponent;
  let fixture: ComponentFixture<BingAutosuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingAutosuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingAutosuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
