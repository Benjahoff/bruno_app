import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraModule)
  },
  {
    path: 'scan/:type',
    loadChildren: () => import('./pages/scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'choice',
    loadChildren: () => import('./pages/choice/choice.module').then( m => m.ChoicePageModule)
  },
  {
    path: 'scan-info',
    loadChildren: () => import('./pages/scan-info/scan-info.module').then( m => m.ScanInfoPageModule)
  },
  {
    path: 'send',
    loadChildren: () => import('./pages/send/send.module').then( m => m.SendPageModule)
  },
  {
    path: 'consults',
    loadChildren: () => import('./pages/consults/consults.module').then( m => m.ConsultsPageModule)
  },
  {
    path: 'consult',
    loadChildren: () => import('./pages/consult/consult.module').then( m => m.ConsultPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
