import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'view', component:ViewComponent},
  {path:'login', component:LoginComponent},
  {path:'binding', component:BindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
