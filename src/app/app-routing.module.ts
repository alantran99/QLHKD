import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './modules/forms/forms.component';
//import { FormComponent } from './modules/form/form.component';
//import { SidenavComponent } from './modules/sidenav/sidenav.component';


const routes: Routes = [
  //{ path: '', component: SidenavComponent }
  { path:'forms', component:FormsComponent},
  { path: '', redirectTo:'forms', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
