import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo:'main-page', pathMatch: 'full'},
    {path: 'main-page',
      loadComponent: () => import('./components/command-line/commandline.component').then(m => m.CommandlineComponent)},
    {path: 'app-help-component',
      loadComponent: () => import('./components/help-component/help-component.component').then(m => m.HelpComponentComponent)},
    //   {path: 'work-experience',
    //   loadComponent: () => import('./components/work-experience/work-experience.component').then(m => m.WorkExperienceComponent)},
    //   {path: 'education',
    //   loadComponent: () => import('./components/education/education.component').then(m => m.EducationComponent)},
    //   {path: 'skills',
    //   loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent)},
    //   {path: 'projects',
    //   loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent)},
];
