import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [NgbModal]
})
export class ProfileComponent implements OnInit {

  public socialHandle: any;
  constructor(
    private modalService: NgbModal,
    private router: Router
  ) {
    this.socialHandle = [
      {
        title: 'LinkedIn',
        icon: 'icon-linkedin',
        background: 'linkedin-bg',
        link: 'https://www.linkedin.com/in/akhilesh-kumar-35a808b8/'
      },
      {
        title: 'Github',
        icon: 'icon-github',
        background: 'github-bg',
        link: 'https://github.com/Akhileshkr236'
      },
      {
        title: 'Instagram',
        icon: 'icon-instagram',
        background: 'instagram-bg',
        link: 'https://www.instagram.com/lensrealty/'
      },
      {
        title: 'Twitter',
        icon: 'icon-twitter',
        background: 'twitter-bg',
        link: 'https://twitter.com/Akhiles10800613'
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  open(content) {
    this.modalService.open(content, {
      centered: true,
      windowClass: 'custom-centered-modal'
    } );
  }
  readMore( readMoreModal ) {
    this.modalService.open(readMoreModal, {
      windowClass: 'custom-drawer',
      animation: false,
      scrollable: true
    } );
  }
  customOptions: OwlOptions = {
    autoWidth:false,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items:5,
    nav: true
  }
}
