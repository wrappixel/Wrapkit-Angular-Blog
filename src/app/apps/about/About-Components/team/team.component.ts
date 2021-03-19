import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team=[
    {
      image:'assets/images/team/t1.jpg',
      name:'Michael Doe',
      designation:'Property Specialist',
      comment:'You can relay on our amazing features list and also our customer services will be great experience.',
      followOn:['fa fa-facebook','fa fa-twitter','fa fa-instagram','fa fa-behance']
    },
    {
      image:'assets/images/team/t2.jpg',
      name:'Michael Doe',
      designation:'Property Specialist',
      comment:'You can relay on our amazing features list and also our customer services will be great experience.',
      followOn:['fa fa-facebook','fa fa-twitter','fa fa-instagram','fa fa-behance']
    },
    {
      image:'assets/images/team/t3.jpg',
      name:'Michael Doe',
      designation:'Property Specialist',
      comment:'You can relay on our amazing features list and also our customer services will be great experience.',
      followOn:['fa fa-facebook','fa fa-twitter','fa fa-instagram','fa fa-behance']
    },
    {
      image:'assets/images/team/t4.jpg',
      name:'Michael Doe',
      designation:'Property Specialist',
      comment:'You can relay on our amazing features list and also our customer services will be great experience.',
      followOn:['fa fa-facebook','fa fa-twitter','fa fa-instagram','fa fa-behance']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
