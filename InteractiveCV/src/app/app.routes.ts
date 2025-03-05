import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo:'main-page', pathMatch: 'full'},
    {path: 'main-page',
      loadComponent: () => import('./components/command-line/commandline.component').then(m => m.CommandlineComponent)}
];
