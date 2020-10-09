import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './is-logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nuevo-usuario',
    loadChildren: () => import('./nuevo-usuario/nuevo-usuario.module').then( m => m.NuevoUsuarioPageModule),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'ubicaciones',
    loadChildren: () => import('./ubicaciones/ubicaciones.module').then( m => m.UbicacionesPageModule)
  }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
