import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterIntakeComponent } from './master-intake/master-intake.component';
import {IntakeTableComponent} from './intake-table/intake-table.component';

const routes: Routes = [
  { path:'', redirectTo:'/master-intake', pathMatch:'full'},
  { path: 'master-intake', component: MasterIntakeComponent },
  { path: 'master-intake', component: IntakeTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
