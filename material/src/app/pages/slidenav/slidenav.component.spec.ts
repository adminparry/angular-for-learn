import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidenavComponent } from './slidenav.component';

describe('SlidenavComponent', () => {
  let component: SlidenavComponent;
  let fixture: ComponentFixture<SlidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
