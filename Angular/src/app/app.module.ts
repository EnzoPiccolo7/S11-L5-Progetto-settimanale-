import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {  MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 
/* import { UsersModule } from './users/users.module'; */
/* import { Err404Module } from './err404/err404.module'; */

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    AuthModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatIconModule
            /* UsersModule, */
    /* Err404Module */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }