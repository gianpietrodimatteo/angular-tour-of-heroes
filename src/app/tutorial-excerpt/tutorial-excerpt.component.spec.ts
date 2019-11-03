import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialExcerptComponent } from './tutorial-excerpt.component';

describe('TutorialExcerptComponent', () => {
  let component: TutorialExcerptComponent;
  let fixture: ComponentFixture<TutorialExcerptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialExcerptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialExcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
