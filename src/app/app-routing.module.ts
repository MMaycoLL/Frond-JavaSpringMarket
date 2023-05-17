import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { EnvioComponent } from './pagina/envio/envio.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil/:codigo', component: RegistroComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'envio', component: EnvioComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "detalle-producto/:id", component: DetalleProductoComponent },
  { path: "gestion-productos", component: GestionProductosComponent },
  { path: "editar-producto/:codigo", component: CrearProductoComponent },
  { path: "carrito", component: CarritoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
