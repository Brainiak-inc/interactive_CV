import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLayoutComponent } from './skills-layout.component';

describe('SkillsLayoutComponent', () => {
  let component: SkillsLayoutComponent;
  let fixture: ComponentFixture<SkillsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
