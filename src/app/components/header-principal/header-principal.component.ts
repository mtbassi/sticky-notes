import { Component } from '@angular/core';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css'],
})
export class HeaderPrincipalComponent {
  menuVariable: boolean = false;
  menuIconVariable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }
}
