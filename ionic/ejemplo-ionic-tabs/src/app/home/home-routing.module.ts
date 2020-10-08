import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'nuevo-usuario',
        loadChildren: () => import('../nuevo-usuario/nuevo-usuario.module').then( m => m.NuevoUsuarioPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then( m => m.InfoPageModule)
      }
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
