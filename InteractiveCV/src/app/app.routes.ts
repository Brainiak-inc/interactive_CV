import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout-component/layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent,
      children: [
        {path: 'help', 
          loadComponent: () => import('./components/help-component/help-component.component').then(m => m.HelpComponentComponent)},
        
      ]
    },
    
];
