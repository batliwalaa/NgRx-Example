import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'region',
    pathMatch: 'full'
  },
  { 
    path: 'region',
    loadChildren: () => import('./region/region.module').then(m => m.RegionModule)
  },
  { 
    path: '**',
    redirectTo: 'region',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
