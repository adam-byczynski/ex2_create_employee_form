import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CreateNewEmployeeFormComponent} from './components/create-new-employee-form/create-new-employee-form.component';
import {
  CreateNewEmployeeFormComponentModule
} from './components/create-new-employee-form/create-new-employee-form.component-module';
import {CreateNewEmployeeServiceModule} from './services/create-new-employee.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'create-employee',
    component: CreateNewEmployeeFormComponent
  }]), CreateNewEmployeeFormComponentModule, CreateNewEmployeeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
