import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterPageComponent } from './tester-page.component';

describe('TesterPageComponent', () => {
  let component: TesterPageComponent;
  let fixture: ComponentFixture<TesterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesterPageComponent]
    });
    fixture = TestBed.createComponent(TesterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
