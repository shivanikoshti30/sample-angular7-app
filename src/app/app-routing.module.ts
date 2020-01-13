import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { DefaultComponent } from './shared/components/default/default.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full'
  },
  {
    path: 'default',
    component: DefaultComponent,
    data: { title: 'Blog Home' }
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { title: 'Blog Home' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
