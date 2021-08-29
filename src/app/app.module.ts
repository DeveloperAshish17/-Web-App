import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
