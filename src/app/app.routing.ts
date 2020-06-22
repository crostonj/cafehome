import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DefaultComponent ,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
  ]},
 // {path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: PageNotFoundComponent }
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
