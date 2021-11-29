import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {

  public education: any;
  constructor() {
    this.education = [
      {
        name: 'M.B.A.',
        duration: '2017 - 2019',
        designation: 'Institute of Management Sciences',
        profile: 'assets/images/profile.jpg',
        collegeShort: 'IMS Lucknow',
        collegeLink: 'https://udrc.lkouniv.ac.in/Department/DepartmentDetail/History?dept=51',
        collegeDetails: [
          'Major- Finance and Minor- Marketing',
          'Completed in 2019 with an aggregate of 6.63 CGPA.',
        ]
      },
      {
        name: 'B.Tech',
        duration: '2013 - 2017',
        designation: 'JK Institute of applied physics and technology',
        profile: 'assets/images/profile.jpg',
        collegeShort: 'JK Institute',
        collegeLink: 'http://www.jkinstitutetpc.in/',
        collegeDetails: [
          'Major- Electronics and communication engineering',
          'Completed in 2017 with an aggregate of 6.8 CGPA.',
        ]
      },
      {
        name: '12th Standard',
        duration: '2013',
        designation: 'S. K. D. Academy',
        profile: 'assets/images/profile.jpg',
        collegeShort: 'S. K. D. Academy',
        collegeLink: 'https://skdacademia.org/',
        collegeDetails: [
          'Completed in 2013 with an aggregate of 85%.',
        ]
      },
      {
        name: '10th Standard',
        duration: '2011',
        designation: 'S. K. D. Academy',
        profile: 'assets/images/profile.jpg',
        collegeShort: 'S. K. D. Academy',
        collegeLink: 'https://skdacademia.org/',
        collegeDetails: [
          'Completed in 2011 with an aggregate of 73%.',
        ]
      },
    ]
  }

  ngOnInit(): void {
  }

}
