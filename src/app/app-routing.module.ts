import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterIntakeComponent } from './master-intake/master-intake.component';
import { MasterBatchComponent } from './master-batch/master-batch.component';
import { MasterProgramComponent } from './master-program/master-program.component';

const routes: Routes = [
  { path:'', redirectTo:'/master-intake', pathMatch:'full'},
  { path: 'master-intake', component: MasterIntakeComponent },
  { path: 'master-batch', component: MasterBatchComponent },
  { path: 'master-program', component: MasterProgramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
