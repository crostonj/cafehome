import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'app/modules/home/home.component';
import { ComponentsModule } from 'app/components/components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
