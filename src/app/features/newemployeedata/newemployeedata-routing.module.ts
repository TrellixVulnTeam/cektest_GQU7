import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewemployeedataComponent} from "./newemployeedata.component";

const routes: Routes = [{ path: '', component: NewemployeedataComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewemployeedataRoutingModule { }
