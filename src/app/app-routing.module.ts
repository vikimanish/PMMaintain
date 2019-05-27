import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './userportal/user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './adminportal/admin/admin.component';
import{ListallmachineComponent} from './userportal/listallmachine/listallmachine.component';
import{ListmachineComponent} from './userportal/listmachine/listmachine.component';
import { MachinemgmtComponent } from './adminportal/machinemgmt/machinemgmt.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'listallmachine',
        component: ListallmachineComponent
    },
    {
        path: 'listmachine',
        component: ListmachineComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'admin/machinemgmt',
        component: MachinemgmtComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
