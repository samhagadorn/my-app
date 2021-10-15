import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {
  userName = 'Sam';
  constructor() { }

  onShow(){
    alert('One Way works!');
  }
  ngOnInit(): void {
  }

}
