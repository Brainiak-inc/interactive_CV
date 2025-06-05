import { Routes } from '@angular/router';
import { CommandlineComponent } from './components/command-line/commandline.component';

export const routes: Routes = [
    {path: '', loadComponent: () => 
      import('./components/command-line/commandline.component')
        .then(m => m.CommandlineComponent),
      children: [
        {path: 'work',
          loadComponent: () => 
            import('./components/work-experience-layout/work-experience-layout.component')
              .then(m => m.WorkExperienceLayoutComponent)
        },
        {
          path: 'skills',
          loadComponent: () => 
            import('./components/skills-layout/skills-layout/skills-layout.component')
              .then(m => m.SkillsLayoutComponent)
        }
      ]
    },
    
];
