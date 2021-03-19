import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achivement',
  templateUrl: './achivement.component.html',
  styleUrls: ['./achivement.component.css']
})
export class AchivementComponent implements OnInit {

  achivement = [
    {
      icon: 'sl-icon-emotsmile',
      field: 'Happy Clients',
      fieldCount: 5000
    },
    {
      icon: 'sl-icon-support',
      field: 'Cups of Coffe',
      fieldCount: 2300
    },
    {
      icon: 'sl-icon-people',
      field: 'Dedicated staff',
      fieldCount: 200
    },
    {
      icon: 'sl-icon-trophy',
      field: 'Awards won',
      fieldCount: 20
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
