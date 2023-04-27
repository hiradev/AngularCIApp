import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntakeComponent } from './intake/intake.component';
import { BatchComponent } from './batch/batch.component';

const routes: Routes = [
  { path:'', redirectTo:'/master-intake', pathMatch:'full'},
  { path: 'master-intake', component: IntakeComponent },
  { path: 'master-batch', component: BatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
