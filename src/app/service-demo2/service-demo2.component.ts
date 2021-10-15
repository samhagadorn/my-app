import { Component, OnInit,ElementRef } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service-demo2',
  templateUrl: './service-demo2.component.html',
  styleUrls: ['./service-demo2.component.css']
})
export class ServiceDemo2Component implements OnInit {
  public employees: any=[];
//  public empCount: number=0;
  constructor(private es: EmployeeService) {
    this.employees = es.getEmployees();
   }

  ngOnInit(): void {
  }

}
