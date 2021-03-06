import { NgModule } from '@angular/core';

import { WebSharedModule } from './../../../../my-shared/modules/web-shared/web-shared.module';
import { MaterialSharedModule } from './../../../../my-shared/modules/material-shared/material-shared.module';

import { ComponentsSharedModule } from './../../../../my-shared/modules/components-shared/components-shared.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ListarComponent } from './components/crud/listar/listar.component';
import { ApagarComponent } from './components/crud/apagar/apagar.component';
import { CriaralterarComponent } from './components/crud/criaralterar/criaralterar.component';
import { DetalheComponent } from './components/crud/detalhe/detalhe.component';
import { UserCrudService } from './services/user-crud.service';



@NgModule({
  declarations: [
    UserComponent,
    MainMenuComponent,
    ListarComponent,
    ApagarComponent,
    CriaralterarComponent,
    DetalheComponent

  ],
  imports: [
    WebSharedModule,
    MaterialSharedModule,
    ComponentsSharedModule,
    UserRoutingModule
  ],
  providers: [
    UserCrudService
  ]
})
export class UserModule { }
