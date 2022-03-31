import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

import { NgModule } from '@angular/core';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);
const redirectLoggedInToEmployee = () => redirectLoggedInTo(['employee']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./features/employeecvdata/employeecvdata.module').then(
        (l) => l.EmployeecvdataModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'newcvdata',
    loadChildren: () =>
      import('./features/newemployeedata/newemployeedata.module').then(
        (k) => k.NewemployeedataModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
