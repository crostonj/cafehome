import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: DefaultComponent ,
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    }
  ]},
  {
      path: 'login',
      component: LoginComponent
  },
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
