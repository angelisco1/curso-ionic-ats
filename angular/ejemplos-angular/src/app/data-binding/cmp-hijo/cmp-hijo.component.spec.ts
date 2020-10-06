import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpHijoComponent } from './cmp-hijo.component';

describe('CmpHijoComponent', () => {
  let component: CmpHijoComponent;
  let fixture: ComponentFixture<CmpHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
