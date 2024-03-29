import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../../my-core/guards/auth.guard';

const routes: Routes = [

  { path: '', component: AdminComponent ,
  children: [
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

    {
      path: 'gestao', loadChildren: () => import('./gestao/gestao.module').then(m => m.GestaoModule),
      canActivate: [AuthGuard],
    }

  ] },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
