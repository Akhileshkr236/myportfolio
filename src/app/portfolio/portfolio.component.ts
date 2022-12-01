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
        title: 'Medanta',
        associated: 'MetaDesign Solutions',
        link: 'https://www.medanta.org/',
        img: 'assets/images/medantalogo.png',
        desc: 'Medanta, is an Indian hospital chain based in Gurgaon, India. The chain was started in 2009.',
        keypoint: [
          'I worked as a UI developer on this application.',
          'Collaborate with Front end developers for UI integration and changes required with the dynamic data from the APIs.',
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
        title: 'Future Generali',
        associated: 'MetaDesign Solutions',
        link: 'https://general.futuregenerali.in/',
        img: 'assets/images/fgilogo.jpg',
        desc: 'Future Generali India Insurance Company Limited is a private general insurance company in India. The company is a joint venture between the Future Group and Assicurazioni Generali. It commenced business in September 2000.',
        keypoint: [
          'Developing UI/UX that produces interactive web pages.',
          'Troubleshoot issues and bugs on microsites when published. Reviewing the code and minimization of file sizes accordingly.',
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
        title: 'Tata Capital',
        associated: 'MetaDesign Solutions',
        link: 'https://www.tatacapital.com/',
        img: 'assets/images/tata-capital-logo.svg',
        desc: 'Tata Capital Limited is a financial and investment service provider in India. The company is based in Mumbai and has more than 100 branches across the country. The firm offers consumer loans, wealth management, commercial finance, and infrastructure finance, among others.',
        keypoint: [
          'Bridge the gap between user interface design and technical implementation.',
          'Day to day responsibility consist of reviewing code and writing code in a manner that it can be reused.',
          'Ensuring cross-platform optimization and responsiveness of application for all devices and browsers.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.'
        ]
      },
      {
        title: 'Eylog',
        associated: 'MetaDesign Solutions',
        link: 'https://eylog.co.uk/',
        img: 'assets/images/eylog-Banner.svg',
        desc: 'Comprehensive software for nursery management, enquiries & registration, recruitment, learning journals and engagement. Formerly eyLog.',
        keypoint: [
          'Bridge the gap between user interface design and technical implementation.',
          'Day to day responsibility consist of reviewing code and writing code in a manner that it can be reused.',
          'Ensuring cross-platform optimization and responsiveness of application for all devices and browsers.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.'
        ]
      },
      {
        title: 'Webhance',
        associated: 'Freelance',
        link: 'https://webhance-dev-v2.web.app/',
        img: 'assets/images/webhance.png',
        desc: 'It is a games providing website. Here you can get all the paid/ premium games for free. No charges apply',
        keypoint: [
          'This application is build on JavaScript framework (React)',
          'I worked as a UI developer on this application.',
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
      {
        title: 'Yes Bank',
        associated: 'MetaDesign Solutions',
        link: 'https://www.yesbank.in/',
        img: 'assets/images/yesbanklogo.jpg',
        desc: 'Bunkers Group is a company incorporated in September 2007 in Nigeria with three subsidiaries companies, Bunkers Petroleum, Bunkers Properties and Bunkers Haulage. ',
        keypoint: [
          'Worked as a UI developer on this project.',
          'Collaborate with Client and UI designers for UI requirements and other stuffs',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
        ]
      },
      {
        title: 'Kyubooks',
        associated: 'MetaDesign Solutions',
        link: 'http://kyubook.com/',
        img: 'assets/images/kyubookLogoColor.svg',
        desc: 'The application you’ll ever need to find new experiences, track your child’s education, and engage with parents just like you to share ideas and enhance learning. Worked on the scheduler module for this application.',
        keypoint: [
          'Worked as a UI developer on this project.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Collaborate with Client and UI designers for UI requirements and other stuffs',
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
