import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"} ,
  {path:"home" , component:HomeComponent  , title:"home"} ,
  {path:"about" , component:AboutComponent , title:"about"} ,
  {path:"services" , component:ServicesComponent , title:"services"} ,
  {path:"testimonials" , component:TestimonialsComponent  ,title:"testimonials"} ,
  {path:"contacts" , component:ContactsComponent  ,title:"contacts"} ,
  {path:"**" , component:NotFoundComponent  ,title:"404"} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
