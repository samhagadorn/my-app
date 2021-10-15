import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {
  public employees:any=[];

  constructor(private es: EmployeeService) {
    this.employees = es.getEmployees();
   }


  ngOnInit(): void {
  }

}
