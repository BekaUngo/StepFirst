import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'contact', component: ContactComponent},
  {path:'users/:id/:name', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',
    scrollOffset: [0, 80] // optional, e.g. to offset for fixed headers
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// სეგმენტი - გამოიყენება ლინკისთვის
// ქვერი პარამეტრი
// ფრაგმენტი