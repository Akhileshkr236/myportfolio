import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'insta-portfolio-final';
  theme: Theme = 'light-theme';


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {

  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  ngOnInit(): void {
    this.initializeTheme();
   }
  
   switchTheme(){
     this.document.body.classList.replace(
       this.theme,
       this.theme === 'light-theme' ? (this.theme = 'dark-theme') : (this.theme = 'light-theme')
     );
   }

  initializeTheme = (): void => this.renderer.addClass(this.document.body, this.theme);
}

export type Theme = 'light-theme' | 'dark-theme';