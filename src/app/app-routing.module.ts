import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'sobre',
    component:SobreComponent
  },
  {
    path:'habilidades',
    component:HabilidadesComponent
  },
  {
    path:'portfolio',
    component:PortifolioComponent
  },
  {
    path:'contato',
    component:ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
