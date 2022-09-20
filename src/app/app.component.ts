import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SolidBranch';

  types: string = 'income';


  select(type: any) {
    this.types = type;
  }
}
