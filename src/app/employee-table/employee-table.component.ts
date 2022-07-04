import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent {
  title = "Employee Table"

  headers = ["Name", "ID", "Salary", "Title"]

  employees = [
    {
      employeeId: 1001,
      employeeName: 'Dustin Burns',
      employeeSalary: 65000,
      employeeTitle: 'Developer',
      employeeImg: '../../assets/Dustin.jpg',
    },
    {
      employeeId: 1002,
      employeeName: 'David Thomas',
      employeeSalary: 135000,
      employeeTitle: 'Lead Developer',
      employeeImg: 'assets/David.jpg',
    },
    {
      employeeId: 1003,
      employeeName: 'James Gosling',
      employeeSalary: 165000,
      employeeTitle: 'Lead Engineer',
      employeeImg: 'assets/James.jpg',
    },
    {
      employeeId: 1004,
      employeeName: 'Linus Torvalds',
      employeeSalary: 155000,
      employeeTitle: 'Linux Support',
      employeeImg: 'assets/Linus.jpg',
    },
    {
      employeeId: 1005,
      employeeName: 'Bjarne Stroustrup',
      employeeSalary: 95000,
      employeeTitle: 'Engineer',
      employeeImg: 'assets/Bjarne.jpg',
    },
    {
      employeeId: 1006,
      employeeName: 'Rushabh Mehta',
      employeeSalary: 195000,
      employeeTitle: 'Director',
      employeeImg: 'assets/Rushabh.jpg',
    }
  ];
}
