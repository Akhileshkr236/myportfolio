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
        profile: 'assets/images/profile.jpg'
      }
    ]
  }

  ngOnInit(): void {
    console.log(this.workExperience)
  }

}
