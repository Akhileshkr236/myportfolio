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
    this.headerText =  this.router.url;
    this.headerText = this.headerText.replace('/','');
    console.log(this.headerText);
    
   }
}
