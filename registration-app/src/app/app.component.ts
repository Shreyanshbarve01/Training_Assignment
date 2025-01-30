import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './registration-form/registration-form.component'; // Import the registration form component

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule, CommonModule, ReactiveFormsComponent]  // Include the imported component here
})
export class AppComponent {
  employees: any[] = [];

  addEmployee(employee: any) {
    this.employees.push(employee);
  }
}
