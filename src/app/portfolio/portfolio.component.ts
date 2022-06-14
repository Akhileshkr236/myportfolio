import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  public portfolio: any;

  constructor(
    private modalService: NgbModal
  ) {
    this.portfolio = [
      {
        title: 'GetDone',
        associated: 'MetaDesign Solutions',
        link: 'https://www.getdone.com/',
        img: '../../assets/images/getdone.svg',
        desc: 'GetDone is a tech-based property maintenance project which comes under REX a company based in Austin, Texas. It is a property maintenance service focused on quick, efficient and high quality services with vetted professionals.',
        keypoint: [
          'As a Front End Engineer I was responsible for building the next generation of user interface/ experience for one of their Customer side application.',
          'Writing the code in reusable manner to enable the consistency in the application.',
          'This application is build on JavaScript framework (Angular)',
          'In this I have worked with HTML, Typescript/JavaScript, and CSS/Sass and related tooling, frameworks, and libraries.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.'
        ]
      },
      {
        title: 'ShopSupply',
        associated: 'MetaDesign Solutions',
        link: 'https://www.shopsupply.com/',
        img: '../../assets/images/shopsupply.svg',
        desc: 'ShopSupply is a internal social media platform project which comes under REX a company based in Austin, Texas.',
        keypoint: [
          'This application is build on JavaScript framework (React)',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.'
        ]
      },
      {
        title: 'JobCall',
        associated: 'MetaDesign Solutions',
        link: 'https://www.jobcall.com/',
        img: '../../assets/images/jobcall.svg',
        desc: 'JobCall is a complaint management platform which comes under REX a company based in Austin, Texas. When user calls on the given phone number than an AI takes up the message asking the issue and some other details. After that AI automatically calls the respective property manager, reminding about the raised call. Than the property manager handles the call accordingly and move the ticket as closed after resolving.',
        keypoint: [
          'This application is build on JavaScript framework (React)',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.'
        ]
      },
      {
        title: 'IdCore',
        associated: 'MetaDesign Solutions',
        link: 'https://www.idcore.com/',
        img: '../../assets/images/idcore.svg',
        desc: 'JobCall is a complaint management platform which comes under REX a company based in Austin, Texas.',
        keypoint: [
          'This application is build on JavaScript framework (React)',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.'
        ]
      },
      {
        title: 'Hycin',
        associated: 'Vorrow Technology Solutions',
        link: 'https://play.google.com/store/apps/details?id=com.chat.hycinapp',
        img: 'https://play-lh.googleusercontent.com/4UnpXBqydi0cps2PdHwsQTzitPBBkVaY5x-5qmjXo5PkFgUklUCN_24l8_1rB407EaU=w240-h480-rw',
        desc: 'JobCall is a complaint management platform which comes under REX a company based in Austin, Texas.',
        keypoint: [
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.'
        ]
      },
      {
        title: 'Academy Pro',
        associated: 'Vorrow Technology Solutions',
        link: 'https://play.google.com/store/apps/details?id=com.vorrowtech.AcademyPro',
        img: 'https://play-lh.googleusercontent.com/5pYkcMMgVWn_AQVuz-pt8yYilLdjlYyYTotRr-KR_PfbKkklnt3es0fFTihzN6x_p5Q=w240-h480-rw',
        desc: 'JobCall is a complaint management platform which comes under REX a company based in Austin, Texas.',
        keypoint: [
          'This application is build on JavaScript framework (React)',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.'
        ]
      },
      {
        title: 'Bunkers Group',
        associated: 'Vorrow Technology Solutions',
        link: 'https://www.bunkers-group.com/Home',
        img: 'https://www.bunkers-group.com/img/logo.png',
        desc: 'Bunkers Group is a company incorporated in September 2007 in Nigeria with three subsidiaries companies, Bunkers Petroleum, Bunkers Properties and Bunkers Haulage. ',
        keypoint: [
          'Designed and developed the UI of the webapp.',
          'Development - Developing UI/UX design wireframes to actual code that produces interactive web pages. To ensure pages and templates created render consistently across different browsers and devices. Troubleshoot issues and bugs on microsites when published',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Designing - Creating the wireframes, prototypes and UI of the website. Making the graphics of the same.'
        ]
      },
    ]
  }

  ngOnInit(): void {
  }


  open(portfolioModal) {
    this.modalService.open(portfolioModal, {windowClass: 'custom-drawer custom-modal'});
  }

}
