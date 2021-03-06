import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDistanceComponent } from './find-distance.component';

describe('FindDistanceComponent', () => {
  let component: FindDistanceComponent;
  let fixture: ComponentFixture<FindDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
