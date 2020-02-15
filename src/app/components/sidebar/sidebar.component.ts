import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
  }
export const ROUTES1: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' }
  ]
export const ROUTES: RouteInfo[] = [
    
    //{ path: '/managestaff', title: 'Manage Staff',  icon: 'person', class: '' },
    //{ path: '/manage-ward', title: 'Manage Wards',  icon: 'content_paste', class: '' },
    //{ path: '/manage-categories', title: 'Manage Ward Categories',  icon: 'library_books', class: '' },
    //{ path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Areas',  icon: 'location_on', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuItems1: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems1 = ROUTES1.filter(menuItems1 => menuItems1)
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
