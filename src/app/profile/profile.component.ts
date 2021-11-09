import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class ProfileComponent implements OnInit {

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {
      centered: true
    } );
  }
  readMore( readMoreModal ) {
    this.modalService.open(readMoreModal, {
      windowClass: 'custom-drawer',
      animation: false,
      scrollable: true
    } );
  }
}
