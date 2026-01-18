import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceLayoutComponent } from './work-experience-layout.component';

describe('WorkExperienceLayoutComponent', () => {
  let component: WorkExperienceLayoutComponent;
  let fixture: ComponentFixture<WorkExperienceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
