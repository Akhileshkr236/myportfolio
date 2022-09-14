import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  public skills = [
    {
      skillType: 'Front End',
      profile: 'assets/images/profile.jpg',
      skillList: [
        'HTML',
        'CSS',
        'JavaScript/jQuery',
        'Bootstrap',
        'TailwindCss',
        'Materializecss',
        'Angular',
        'React',
        'Typescript'
      ]
    },
    {
      skillType: 'Back End ',
      profile: 'assets/images/profile.jpg',
      skillList: [
        'PHP',
        'Node.js'
      ]
    },
    {
      skillType: 'Tools and Databases ',
      profile: 'assets/images/profile.jpg',
      skillList: [
        'NPM',
        'Mysql',
        'MongoDB'
      ]
    }
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  getFirstLetter( letter: any ){
    letter = letter.charAt(0);
    return letter;
  }

}
