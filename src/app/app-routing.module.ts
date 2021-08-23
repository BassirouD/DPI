import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./authPages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./authPages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'demande',
    loadChildren: () => import('./pages/demande/demande.module').then( m => m.DemandePageModule)
  },
  {
    path: 'parametres',
    loadChildren: () => import('./pages/parametres/parametres.module').then( m => m.ParametresPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
