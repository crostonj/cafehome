import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'app/components/home/home.component';
import { SharedModule } from 'app/components/shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { SettingsComponent } from 'app/components/settings/settings.component';
import { RegisterComponent } from 'app/components/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'app/components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    SettingsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatDividerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DefaultModule { }
