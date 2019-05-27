import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './userportal/user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './adminportal/admin/admin.component';
import { PmComponent } from './pm/pm.component';
import{ListallmachineComponent} from './userportal/listallmachine/listallmachine.component';
import{ListmachineComponent} from './userportal/listmachine/listmachine.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import {DataTableModule} from "angular-6-datatable";
import { MachinemgmtComponent } from './adminportal/machinemgmt/machinemgmt.component';
import { ModalComponent } from './adminportal/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    ListallmachineComponent,
    ListmachineComponent,
    MachinemgmtComponent,
    ModalComponent
  ],
  entryComponents: [ ModalComponent ]
,
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTableModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
