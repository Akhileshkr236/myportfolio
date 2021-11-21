import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html'
})
export class WorkExperienceComponent implements OnInit {

  public workExperience: any;
  constructor() {
    this.workExperience= [
      {
        name: 'Akhilesh Kumar',
        duration: 'June 2021 - Present',
        designation: 'UI Developer',
        imageSrc: 'assets/images/mdslogo.png',
        profile: 'assets/images/profile.jpg',
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
          'Git'
        ]
      },
      {
        name: 'Akhilesh Kumar',
        duration: 'Oct 2020 - May 2021',
        designation: 'Jr. Front End Developer',
        imageSrc: 'assets/images/vorrowtechlogo.jpg',
        profile: 'assets/images/profile.jpg',
        jobDesc: [
          'Collaborate with product managers and designers to iterate on requirements, designs, and implementations.',
          'Bridge the gap between user interface design and technical implementation.',
          'Currently working on Responsive design, JS libraries(Angular) for enhanced interactions.'
        ],
        projects: [
          'Bunger Group',
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
          'Adobe After effects'
        ]
      },
      {
        name: 'Akhilesh Kumar',
        duration: 'June 2020 - Sept 2020',
        designation: 'As a Freelancer',
        imageSrc: 'assets/images/Freelancer-Logo.jpg',
        profile: 'assets/images/profile.jpg',
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
          'PHP',
          'MySQL',
          'JavaScript/ jQuery',
          'CSS/ CSS3',
          'HTML/ HTML5',
        ],
        softwares:[
          'Adobe Photoshop',
          'Adobe Illustrator',
        ]
      },
    ]
  }
  getFirstLetter( letter: any ){
    letter = letter.charAt(0);
    return letter;
  }
  ngOnInit(): void {}

}
