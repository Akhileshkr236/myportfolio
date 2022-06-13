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
        title : 'GetDone',
        link: 'https://www.getdone.com/',
        img: '../../assets/images/getdone.svg',
        desc: '',
      },
      {
        title : 'ShopSupply',
        link: 'https://www.getdone.com/',
        img: '../../assets/images/shopsupply.svg',
        desc: '',
      },
    ]
  }

  ngOnInit(): void {
  }


  open(portfolioModal) {
    this.modalService.open(portfolioModal, { windowClass: 'custom-drawer custom-modal'});
  }

}
