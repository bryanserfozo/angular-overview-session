import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastViewComponent } from './forcast-view.component';

describe('ForcastViewComponent', () => {
  let component: ForcastViewComponent;
  let fixture: ComponentFixture<ForcastViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcastViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
