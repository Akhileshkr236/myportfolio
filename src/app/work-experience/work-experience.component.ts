import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html'
})
export class WorkExperienceComponent implements OnInit {

  public workExperience: any;
  constructor(
    private router: Router
  ) {
    this.workExperience= [
      {
        name: 'Akhilesh Kumar',
        duration: 'June 2021 - Present',
        designation: 'UI Developer',
        imageSrc: 'assets/images/mdslogo.png',
        profile: 'assets/images/profile.jpg',
        companyLink: 'https://metadesignsolutions.com/',
        jobDesc: [
          'Collaborate with product managers and designers to iterate on requirements, designs, and implementations.',
          'Bridge the gap between user interface design and technical implementation.',
          'Currently working on Responsive design, JS libraries(Angular) for enhanced interactions.'
        ],
        projects: [
          'Trustwork',
          'Futuregenerali',
          'Fluid HS'
        ],
        languages: [
          'Angular',
          'TypeScript',
          'CSS',
          'HTML/HTML5',
        ],
        softwares:[
          'Git',
          'Figma'
        ]
      },
      {
        name: 'Akhilesh Kumar',
        duration: 'Oct 2020 - May 2021',
        designation: 'Jr. Front End Developer',
        imageSrc: 'assets/images/vorrowtechlogo.jpg',
        profile: 'assets/images/profile.jpg',
        companyLink: 'https://www.vorrowtech.com/',
        jobDesc: [
          'Worked as UI Designer and Developer',
          'Collaborate with product managers and designers to iterate on requirements, designs, and implementations.',
          'Bridge the gap between user interface design and technical implementation.',
          'Day to day responsibility consist of reviewing code and writing code in a manner that it can be reused.'
        ],
        projects: [
          'Bunker Group',
          'Hycin- How you chat in',
          'Bisht Physics'
        ],
        languages: [
          'JavaScript/ jQuery',
          'CSS/ CSS3',
          'HTML/ HTML5',
        ],
        softwares:[
          'Adobe Photoshop',
          'Adobe XD',
          'Adobe Illustrator',
          'Adobe After effects',
          'Figma'
        ]
      },
      {
        name: 'Akhilesh Kumar',
        duration: 'June 2019 - Sept 2020',
        designation: 'As a Freelancer',
        imageSrc: 'assets/images/Freelancer-Logo.jpg',
        profile: 'assets/images/profile.jpg',
        jobDesc: [
          'Collaborate with clients to iterate on requirements, designs, and implementations.',
          'To finish taken projects on or before deadline.'
        ],
        languages: [
          'PHP',
          'MySQL',
          'HTML/ HTML5',
          'CSS/ CSS3',
          'JavaScript/ jQuery',
        ],
        softwares:[
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Adobe XD',
          'Figma'
        ]
      },
    ]
  }
  getFirstLetter( letter: any ){
    letter = letter.charAt(0);
    return letter;
  }
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

}
