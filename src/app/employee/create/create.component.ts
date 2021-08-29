import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  model: any = {

  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.save(this.model).subscribe(res => {
      alert('Employee Saved');
    })
  }
}
