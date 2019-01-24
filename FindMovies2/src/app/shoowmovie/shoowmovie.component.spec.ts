import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoowmovieComponent } from './shoowmovie.component';

describe('ShoowmovieComponent', () => {
  let component: ShoowmovieComponent;
  let fixture: ComponentFixture<ShoowmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoowmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoowmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
