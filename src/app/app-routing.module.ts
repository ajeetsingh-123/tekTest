import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:'home', component:HomeComponent},
  {path:"contact-create", component:ContactCreateComponent},
  {path:"contact-list", component:ContactListComponent},
  {path:"header", component:HeaderComponent},
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
