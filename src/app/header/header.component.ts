import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .show + .dropdown-menu {
        display: block;
        transform: translate(-70px, -7px);
      }
    `,
  ],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
