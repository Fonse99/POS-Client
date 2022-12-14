import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  @Input() items: BreadCrumb[] = [
    {
      name: 'default',
      icon: '../../../favicon.ico',
      route: '/home',
    },
  ];
  constructor() {}
}

export interface BreadCrumb {
  name: string;
  icon: string;
  route: string;
}
