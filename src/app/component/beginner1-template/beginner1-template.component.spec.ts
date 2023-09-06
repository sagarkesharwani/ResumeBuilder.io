import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beginner1TemplateComponent } from './beginner1-template.component';

describe('Beginner1TemplateComponent', () => {
  let component: Beginner1TemplateComponent;
  let fixture: ComponentFixture<Beginner1TemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Beginner1TemplateComponent]
    });
    fixture = TestBed.createComponent(Beginner1TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
