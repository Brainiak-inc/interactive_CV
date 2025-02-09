import { Routes } from '@angular/router';
import { CommandlineComponent } from './components/command-line/commandline/commandline.component';

export const routes: Routes = [
    {path: '', redirectTo:'main-page', pathMatch: 'full'},
    {path: 'main-page', component: CommandlineComponent}
];
