import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommandlineComponent } from '../../command-line/commandline.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, CommandlineComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less'
})
export class LayoutComponent {

}
