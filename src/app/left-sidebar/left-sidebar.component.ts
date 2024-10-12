import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollased = output<boolean>()
  items = [
    {
      RouterLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard'
    },
    {
      RouterLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Products'
    },
    {
      RouterLink: 'pages',
      icon: 'fal fa-file',
      label: 'Pages'
    },
    {
      RouterLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings'
    }
  ];

  toggleColapse():void {
    this.changeIsLeftSidebarCollased.emit(!this.isLeftSidebarCollapsed())
  }

  closeSidenav() {
    this.changeIsLeftSidebarCollased.emit(true)
  }
}
