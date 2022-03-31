import { CommonModule } from '@angular/common';
import { EmployeecvdataComponent } from './employeecvdata.component';
import { EmployeecvdataRoutingModule } from './employeecvdata-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [EmployeecvdataComponent],
  imports: [CommonModule, EmployeecvdataRoutingModule, MatToolbarModule, MatTableModule, MatIconModule],
})
export class EmployeecvdataModule {}
