import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarDetailsComponent } from './side-bar/side-bar-details/side-bar-details.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TestFormComponent } from './test-form/test-form.component';
import { CustomPipe } from 'src/pipes/custom.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SideBarDetailsComponent,
    MainComponent,
    ContactComponent,
    AboutUsComponent,
    UsersComponent,
    UserComponent,
    EditUserComponent,
    NotFoundComponent,
    LoginComponent,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent,
    TestFormComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule, 
    MatIconModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

