import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   {path: 'home',component: HomeComponent},
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegisterComponent },
  {path: 'dashboard',component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
