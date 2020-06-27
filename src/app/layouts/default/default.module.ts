import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'app/components/home/home.component';
import { SharedModule } from 'app/components/shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatDividerModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
