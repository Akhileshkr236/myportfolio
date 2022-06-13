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
        desc: 'As a Front End Engineer I was responsible for building the next generation of user interface/ experience for one of their Customer side application. Writing the code in reusable manner to enable the consistency in the application.  In this I have worked with HTML, Typescript/JavaScript, and CSS/Sass and related tooling, frameworks, and libraries.',
        keypoint: [
          'This application is build on JavaScript framework (Angular)',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.'
        ]
      },
      {
        title: 'ShopSupply',
        associated: 'MetaDesign Solutions',
        link: 'https://www.getdone.com/',
        img: '../../assets/images/shopsupply.svg',
        desc: 'As a Front End Engineer I was responsible for building the next generation of user interface/ experience for one of their Customer side application. Writing the code in reusable manner to enable the consistency in the application.  In this I have worked with HTML, Typescript/JavaScript, and CSS/Sass and related tooling, frameworks, and libraries.',
        keypoint: [
          'This application is build on JavaScript framework (React)',
          'Collaborate with backend developers for UI integration with the dynamic data from the APIs.',
          'Analyse and identify gaps in functional / business requirements and effectively communicate to the product / business persons.',
          'Attention to detail and a dedication to deliver a high-quality, stable delivery is essential.'
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
