import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { TituloHomeComponent } from './components/titulo-home/titulo-home.component';
import { TituloCompartilhadoComponent } from './components/titulo-compartilhado/titulo-compartilhado.component';
import { DescricaoCompartilhadoComponent } from './components/descricao-compartilhado/descricao-compartilhado.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CardCertificadosComponent } from './components/card-certificados/card-certificados.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    SobreComponent,
    HabilidadesComponent,
    PortifolioComponent,
    ContatoComponent,
    CardHomeComponent,
    TituloHomeComponent,
    TituloCompartilhadoComponent,
    DescricaoCompartilhadoComponent,
    CertificadosComponent,
    CardCertificadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
