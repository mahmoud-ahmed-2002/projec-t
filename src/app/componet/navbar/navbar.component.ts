
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
    let topNAv = document.querySelector('.top-nav') as HTMLElement;
    let bottomNav = document.querySelector('.bottom-nav') as HTMLElement;

    if (window.pageYOffset > headerNav.clientHeight) {
      topNAv.classList.add('d-none');
      bottomNav.classList.add('fixed-top');
    } else {
      topNAv.classList.remove('d-none');
      bottomNav.classList.remove('fixed-top');
    }
    

    // make header visible when scroll up and hid when scroll down
    // let headerNav = document.querySelector("header");
    // let lastScrollY = window.scrollY;

    //   if (lastScrollY < window.scrollY) {
    //     header.classList.add("headerHidden");
    //     document.querySelector(".scrollInd").style.top = "0px";

    //     //this is to toggle menu when i am scrolling up
    //     //this is to toggle menu when i am scrolling up
    //   } else {
    //     header.classList.remove("headerHidden");
    //     document.querySelector(".scrollInd").style.top = "74px";
    //   }
    //   lastScrollY = window.scrollY;
  }
  


  ngOnInit(): void {

    }
}