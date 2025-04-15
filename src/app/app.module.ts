import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './btn/btn.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarDetailsComponent } from './side-bar/side-bar-details/side-bar-details.component';
import { CarsComponent } from './cars/cars/cars.component';
import { CarDetailsComponent } from './cars/cars/car-details/car-details.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailComponent,
    SideBarComponent,
    SideBarDetailsComponent,
    CarsComponent,
    CarDetailsComponent,
    MainComponent,
    ContactComponent,
    AboutUsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

