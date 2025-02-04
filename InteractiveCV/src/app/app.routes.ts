import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
    {path: '', redirectTo:'main-page', pathMatch: 'full'},
    {path: 'main-page', component: MainPageComponent}
];
