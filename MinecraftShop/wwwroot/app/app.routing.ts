import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MainComponent } from './main.component';
import { RegisterComponent } from './register.component';
import { AdminComponent } from './admin.component';
import { PanelComponent } from './panel.component';
import { BlankComponent } from './blank.component';
import { UserListComponent } from './userlist.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainComponent, data: { title: 'Home' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
    { path: 'admin', component: AdminComponent },
    { path: 'panel', component: PanelComponent },
    { path: 'blank', component: BlankComponent },
    { path: 'userlist', component:UserListComponent }


];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [RegisterComponent, MainComponent, LoginComponent, AdminComponent, PanelComponent, BlankComponent, UserListComponent];