import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateNewEmployeeService } from '../../services/create-new-employee.service';
import {EmployeeDTOModel} from "../../models/employee-dto.model";

@Component({
  selector: 'app-create-new-employee-form',
  styleUrls: ['./create-new-employee-form.component.scss'],
  templateUrl: './create-new-employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewEmployeeFormComponent {
  constructor(private _createNewEmployeeService: CreateNewEmployeeService) {
  }

  readonly createNewEmployeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl()
  });

  error_message: string = 'An error occurred, please try again.';

  onCreateNewEmployeeFormSubmitted(employee: EmployeeDTOModel) {
    return this._createNewEmployeeService.createNewEmployee(employee).subscribe(_ => this.creationSuccess(employee), error => alert(this.error_message));
  }

  creationSuccess(employee: EmployeeDTOModel): void {
    alert(`New employee has been created successfully. Name: ${employee.name}, Salary: ${employee.salary}, Age: ${employee.age}.`);
  }

}
