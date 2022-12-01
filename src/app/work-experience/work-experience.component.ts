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
          'Designed softwares  based on requirements and within the constraints of architectural /design guidelines.',
          'Developed react and angular components in re-usable manner for implementation consistency against the design/architecture to increase the reliability.',
          'Working knowledge of Web services, Web API, REST services, HTML, CSS3.',
          'Expertise in CI/CD tools and Code Analysis / Code Review and testing for agile development.'
        ],
        projects: [
          'Medanta',
          'Tata Capital',
          'Kyubooks',
          'JobCall',
          'IdCore',
          'SmartProp',
          'GetDone',
          'ShopSupply',
          'EyLog',
          'FGI (Future Generali India Insurance Company)',
          'Shiv Yog'
        ],
        languages: [
          'Angular',
          'React',
          'TypeScript/JavaScript',
          'CSS/CSS3',
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
        duration: 'June 2020 - May 2021',
        designation: 'Jr. Front End Developer',
        imageSrc: 'assets/images/vorrowtechlogo.jpg',
        profile: 'assets/images/profile.jpg',
        companyLink: 'https://www.vorrowtech.com/',
        jobDesc: [
          'Worked as UX/UI Designer and Developer',
          'Work closely with the technical lead, Designers, and engineering individual contributors in your team to design, develop and deploy applications with a strong focus on scalability, and robustness.',
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
        duration: 'May 2019 - May 2020',
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
          'Bisht Physics',
          'Groom Designs',
          'Webhance'
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
