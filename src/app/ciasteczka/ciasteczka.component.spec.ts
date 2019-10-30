import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiasteczkaComponent } from './ciasteczka.component';

describe('CiasteczkaComponent', () => {
  let component: CiasteczkaComponent;
  let fixture: ComponentFixture<CiasteczkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiasteczkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiasteczkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
