import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
 
@Component({
  selector: 'app-registration-form',
  standalone: true,
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  imports: [ReactiveFormsModule]
})
export class ReactiveFormsComponent {
  employeeForm: FormGroup;
 
  @Output() employeeAdded = new EventEmitter<any>();
 
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      designation: [''],
      skills: [''],
      salary: [''],
      dateOfJoining: ['']
    });
  }
 
  onSubmit() {
    this.employeeAdded.emit(this.employeeForm.value);
    this.employeeForm.reset();
  }
}