import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthenticationGuard } from './helpers/authentication.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: DefaultComponent ,
    children: [{
      path: '',
      component: HomeComponent, canActivate: [AuthenticationGuard]
    },
    {
      path: 'home',
      component: HomeComponent , canActivate: [AuthenticationGuard]
    },
    {
      path: 'settings',
      component: SettingsComponent, canActivate: [AuthenticationGuard]
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
  ]},
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
       // preloadingStrategy: SelectivePreloadingStrategyService,
      }
      )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
