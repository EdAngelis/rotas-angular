import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutComponent } from '../app/pages/about/about.component';
import { Error404Component } from '../app/pages/error404/error404.component';
import { LoginComponent } from '../app/pages/login/login.component';




const routes: Routes = [
  
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about/:id', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
