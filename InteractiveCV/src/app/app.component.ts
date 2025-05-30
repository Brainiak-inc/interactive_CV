import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout-component/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'InteractiveCV';
}
