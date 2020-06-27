import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthenticationServiceService } from './Services/authentication-service.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    SettingsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [
    AuthenticationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router){
    console.log(router.config);
  }
 }
