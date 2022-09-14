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
          'Built UI components in React.js and Angular to digitize the process of global trade.',
          'Collaborate with product managers and designers to iterate on requirements, designs, and implementations.',
          'Expertise in API Integration with the User Interface of Web Applications.',
          'Currently working on Responsive design, JS libraries(Angular, React) for enhanced interactions.'
        ],
        projects: [
          'JobCall',
          'IdCore',
          'SmartProp',
          'GetDone',
          'ShopSupply',
          'EyLog'
        ],
        languages: [
          'Angular',
          'React',
          'TypeScript/JavsScript',
          'CSS',
          'HTML/HTML5',
        ],
        softwares:[
          'Git',
          'Figma/Sketch',
          'Jira',
          'Trello',
          'Confluence'
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
          'Day to day responsibility consist of reviewing code and writing code in a manner that it can be reused.',
          'Ensuring cross-platform optimization and responsiveness of application for all devices and browsers.'
        ],
        projects: [
          'Bunker Group',
          'Hycin- How you chat in',
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
          'Building UI components from UI wireframes using HTML, CSS, JavaScript/jQuery.',
          'Collaborate with clients, teammates and backend developers to iterate on requirements and designs.',
          'Expertise in API Integration with the User Interface of Web Applications using PHP.',
          'To finish taken projects on or before deadline.'
        ],
        projects: [
          'Bisht Physics'
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
