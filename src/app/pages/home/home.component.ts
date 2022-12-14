import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from 'src/app/components/navigation/navigation.component';

@Component({
  selector: 'pg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  navigation: BreadCrumb[] = [
    {
      name: 'dashboard',
      icon: '../../../assets/icons/home-white.png',
      route: 'dashboard',
    },
    {
      name: 'sales',
      icon: '../../../assets/icons/shopping-bag-white.png',
      route: 'sales',
    },
    {
      name: 'inventory',
      icon: '../../../assets/icons/white-boxes.png',
      route: 'inventory',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
