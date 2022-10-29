import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeDTOModel} from "../models/employee-dto.model";
import {Observable} from "rxjs";

@Injectable()
export class CreateNewEmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  createNewEmployee(employee: EmployeeDTOModel): Observable<EmployeeDTOModel> {
    return this._httpClient.post<EmployeeDTOModel>('https://dummy.restapiexample.com/api/v1/create', employee);

  }
}
