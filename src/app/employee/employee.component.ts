import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees = [
    {employeeId:1234, employeeName:"Dustin Burns", employeeSalary:65000, employeeTitle:"Developer", employeeImg:'assets/Dustin.jpg'},
    {employeeId:4321, employeeName:"David Thomas", employeeSalary:135000, employeeTitle:'Lead Developer', employeeImg:'assets/David.jpg'},
    {employeeId:1432, employeeName:"James Gosling", employeeSalary:165000, EmployeeTitle:'Lead Engineer', employeeImg:'assets/James.jpg'},
    {employeeId:1342, employeeName:"Linus Torvalds", employeeSalary:155000, employeeTitle:'Linux Engineer', employeeImg:'assets/Linus.jpg'},
    {employeeId:4123, employeeName:"Bjarne Stroustrup", employeeSalary:95000, employeeTitle:'Engineer', employeeImg:'assets/Bjarne.jpg'}
  ]
}
