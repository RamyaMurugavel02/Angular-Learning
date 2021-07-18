import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'view', component:ViewComponent},
  {path:'login', component:LoginComponent},
  {path:'binding', component:BindingComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'pipes', component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
