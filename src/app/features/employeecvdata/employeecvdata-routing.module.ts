import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeecvdataComponent } from './employeecvdata.component';


const routes: Routes = [{ path: '', component: EmployeecvdataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeecvdataRoutingModule { }
