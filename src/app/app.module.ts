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


@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailComponent,
    SideBarComponent,
    SideBarDetailsComponent
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

