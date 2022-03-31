import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {NewemployeedataComponent} from "./newemployeedata.component";
import {NewemployeedataRoutingModule} from "./newemployeedata-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [NewemployeedataComponent],
  imports: [CommonModule, NewemployeedataRoutingModule, MatToolbarModule, MatTableModule, MatIconModule, MatFormFieldModule],
})
export class NewemployeedataModule {}
