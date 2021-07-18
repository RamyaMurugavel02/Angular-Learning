import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RegisterComponent } from './register/register.component';
import { Test1Component } from './test1/test1.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'view', component:ViewComponent},
  {path:'login', component:LoginComponent},
  {path:'binding', component:BindingComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'pipes', component:PipesComponent},
  {path:'', component:ReactiveComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'test1', component:Test1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
