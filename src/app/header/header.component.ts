import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .show + .dropdown-menu {
        display: block;
      }
      .active {
        background-color: #e3f2fd;
      }
    `,
  ],
})
export class HeaderComponent {
  collapsed = true;
}
