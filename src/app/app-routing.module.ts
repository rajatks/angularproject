import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
