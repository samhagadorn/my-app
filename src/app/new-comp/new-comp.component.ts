import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  course='angular';
  constructor() { 
//    alert("constructor called")
  }

  ngOnInit(): void {
//    alert("ngOnInit called")
  }

//  ngOnChanges(): SimpleChange{
//    return SimpleChange;
//  }
}
