import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { EnvioComponent } from './pagina/envio/envio.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { CalificacionComponent } from './pagina/calificacion/calificacion.component';
import { ComentarioComponent } from './pagina/comentario/comentario.component';
import { FavoritoComponent } from './pagina/favorito/favorito.component';
import { CompraComponent } from './pagina/compra/compra.component';
import { DetalleCompraComponent } from './pagina/detalle-compra/detalle-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CrearProductoComponent,
    EnvioComponent,
    BusquedaComponent,
    CalificacionComponent,
    ComentarioComponent,
    FavoritoComponent,
    CompraComponent,
    DetalleCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
