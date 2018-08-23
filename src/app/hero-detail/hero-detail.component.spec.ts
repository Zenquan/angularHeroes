import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { heroDetailComponent } from './hero-detail.component';

describe('heroDetailComponent', () => {
  let component: heroDetailComponent;
  let fixture: ComponentFixture<heroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ heroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(heroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
