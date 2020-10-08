import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoUsuarioPage } from '../nuevo-usuario/nuevo-usuario.page';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: ':usuarioId',
    component: InfoPage
  },
  // {
  //   path: '',
  //   component: NuevoUsuarioPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutingModule {}
