import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafsComponent } from './cafs.component';

describe('CafsComponent', () => {
  let component: CafsComponent;
  let fixture: ComponentFixture<CafsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
