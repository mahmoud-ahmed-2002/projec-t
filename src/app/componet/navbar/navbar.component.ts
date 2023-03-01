
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';


declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent {
  isTest: boolean = false;
  isDark: boolean = false;
  currentPosition = window.pageYOffset;

  constructor() { }

  //  ------------- navbar effect ---------
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  onWindowScroll() {
    
    let headerNav = document.querySelector('header') as HTMLElement;
    let navScroll = document.querySelector('.nav-scroll') as HTMLElement;
    let topNAv = document.querySelector('.top-nav') as HTMLElement;
    let bottomNav = document.querySelector('.bottom-nav') as HTMLElement;

    if (window.pageYOffset > headerNav.clientHeight) {
      // headerNav.classList.add('d-none');
      navScroll.classList.add('scroll');
    } else {
      // headerNav.classList.remove('d-none');
      navScroll.classList.remove('scroll');
    }
  }
  


  ngOnInit(): void {

    }
}