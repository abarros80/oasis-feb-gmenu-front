import { NgModule } from '@angular/core';

import { WebSharedModule } from './../../../../my-shared/modules/web-shared/web-shared.module';
import { MaterialSharedModule } from './../../../../my-shared/modules/material-shared/material-shared.module';

import { ComponentsSharedModule } from './../../../../my-shared/modules/components-shared/components-shared.module';

import { ItemRoutingModule } from './item-routing.module';

import { ItemCrudService } from './services/item-crud.service';
import { ItemGuard } from './guards/item.guard';
import { ItemDesactivateGuard } from './guards/item-desactivate.guard';

import { ItemComponent } from './item.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ListarComponent } from './components/crud/listar/listar.component';
import { ApagarComponent } from './components/crud/apagar/apagar.component';
import { CriaralterarComponent } from './components/crud/criaralterar/criaralterar.component';
import { DetalheComponent } from './components/crud/detalhe/detalhe.component';
import { ApiCrudService } from '../../../../my-core/services/api-crud.service';





@NgModule({
  declarations: [
    ItemComponent,
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
    ItemRoutingModule
  ],
  providers: [
    ItemCrudService,
    ItemGuard,
    ItemDesactivateGuard
  ]
})
export class ItemModule { }
