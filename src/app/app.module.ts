import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { RestService } from './rest.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { LogoutComponent } from './logout/logout.component';
import { LogincheckService } from './logincheck.service';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    ServiceComponent,
    LogoutComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RestService,LogincheckService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
