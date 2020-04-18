import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CafsComponent } from './cafs/cafs.component';
import { MotoristaComponent } from './motorista/motorista.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'motorista/:id',
    component: MotoristaComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
