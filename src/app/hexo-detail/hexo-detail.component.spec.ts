import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexoDetailComponent } from './hexo-detail.component';

describe('HexoDetailComponent', () => {
  let component: HexoDetailComponent;
  let fixture: ComponentFixture<HexoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
