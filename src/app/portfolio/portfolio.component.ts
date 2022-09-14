import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
        img: 'assets/images/getdone.svg',
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
        img: 'assets/images/shopsupply.svg',
        desc: 'Shop Supply project build on ReactJS . It is an SAAS application where user can add items lists and order them online. Three types of users can use the application- Buyer, Seller and Admin. Client registers on application if they want to order some items from a shop. Items sellers can also register on the application to sell their items. Admin can look over the whole system and control users and items.',
        keypoint: [
          'This application is build on JavaScript framework (React)',
          'I worked as a UI developer on this application.',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Developing UI/UX that produces interactive web pages.',
          'Troubleshoot issues and bugs on microsites when published. Reviewing the code and minimization of file sizes accordingly.'
        ]
      },
      {
        title: 'JobCall',
        associated: 'MetaDesign Solutions',
        link: 'https://www.jobcall.com/',
        img: 'assets/images/jobcall.svg',
        desc: 'JobCall is a complaint management platform which comes under REX a company based in Austin, Texas.Job Call is a complaint management project build on ReactJS. When user calls on the given phone number than an AI takes up the message asking the issue and some other details. After that AI automatically calls the respective property manager, reminding about the raised call. Than the property manager handles the call accordingly and move the ticket as closed after resolving. Other than the core functionalities of the platform, there are other applications of user management.',
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
        img: 'assets/images/idcore.svg',
        desc: 'Shop Supply is a Vendor side Enterprise resource planning (ERP) project build on ReactJS. In this vendor login with their phone number and corresponding property which he has added are listed there and he can add or delete more properties depending on his needs.',
        keypoint: [
          'This application is build on JavaScript framework (React)',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.'
        ]
      },
      {
        title: 'SmartProp',
        associated: 'MetaDesign Solutions',
        link: 'https://www.smartprop.com/',
        img: 'assets/images/smartProp.svg',
        desc: 'SmartProp is a virtual AI for real state build in ReactJS.',
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
    this.modalService.open(portfolioModal, { windowClass: 'custom-drawer custom-modal' });
  }

}
