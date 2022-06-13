import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  headerText: string = 'Resume';

  ngOnInit(): void {
    this.headerTexTDefine();
  }
   headerTexTDefine(){
    this.headerText =  this.router.url;
    if(this.headerText == '/'){
      this.headerText = 'Profile';
    } else{
      this.headerText = this.headerText.replace('/','');
    }
   }
}
