import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './pages/menu/menu.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { StartPagesComponent } from './layout/start-pages/start-pages.component';
import { MenuItemComponent } from './pages/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    Page404Component,
    SignupComponent,
    LoginComponent,
    StartPagesComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
