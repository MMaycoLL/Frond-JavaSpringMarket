import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

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
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';

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
    AlertaComponent,
    DetalleProductoComponent,
    GestionProductosComponent,
    CarritoComponent,
    RevisarProductosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
