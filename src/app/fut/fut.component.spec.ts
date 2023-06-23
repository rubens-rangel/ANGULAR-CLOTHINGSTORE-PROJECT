import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutComponent } from './fut.component';

describe('FutComponent', () => {
  let component: FutComponent;
  let fixture: ComponentFixture<FutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutComponent]
    });
    fixture = TestBed.createComponent(FutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
