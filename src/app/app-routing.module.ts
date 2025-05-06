import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TestFormComponent } from './test-form/test-form.component';

const routes: Routes = [

  {path:'', component: MainComponent},
  // {path:'about-us', component: AboutUsComponent},
  // {path:'contact', component: ContactComponent},
  // {path:'users', component: UsersComponent, children:[
  //   {path:':id/:name', component:UserComponent},
  //   {path:'edit/:id/:name', component:EditUserComponent},
  // ], canActivate:[AuthGuardService]},
  // {path:'template-driven-form',component:TemplateDrivenFormComponent},
  // {path:'reactive-form',component:ReactiveFormsComponent},
  // {path:'not-found',component:NotFoundComponent},
  // {path:'**', redirectTo:'not-found'},
  {path:'reactive-form', component: TestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',
    scrollOffset: [0, 80] // optional, e.g. to offset for fixed headers
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

