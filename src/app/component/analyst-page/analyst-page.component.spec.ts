import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystPageComponent } from './analyst-page.component';

describe('AnalystPageComponent', () => {
  let component: AnalystPageComponent;
  let fixture: ComponentFixture<AnalystPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalystPageComponent]
    });
    fixture = TestBed.createComponent(AnalystPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
