import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from "@angular/router";

import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MasterIntakeComponent } from './master-intake/master-intake.component';

import { MasterBatchComponent } from './master-batch/master-batch.component';
import { MasterProgramComponent } from './master-program/master-program.component';
import { MenuComponent } from './menu/menu.component';

import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

// const appRoutes: Routes = [
//   { path: 'master-intake', component: HeroFormComponent },
//   { path: 'master-batch', component: MasterBatchComponent },
//   { path: 'master-program', component: MasterProgramComponent }
// ];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent,
    MasterIntakeComponent,
    MasterBatchComponent,
    MasterProgramComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
