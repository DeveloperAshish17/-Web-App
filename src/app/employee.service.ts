import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get("https://localhost:44308/api/employees");
  }

  save(model: any) {
    return this.http.post("https://localhost:44308/api/employees", model);
  }
}
