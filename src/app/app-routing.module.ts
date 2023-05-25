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
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'perfil/:codigo', component: RegistroComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'envio', component: EnvioComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "detalle-producto/:id", component: DetalleProductoComponent },

  {
    path: "carrito", component: CarritoComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["CLIENTE"]
    }
  },
  {
    path: "editar-producto/:codigo", component: CrearProductoComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["CLIENTE"]
    }
  },
  {
    path: "gestion-productos", component: GestionProductosComponent, canActivate:
      [RolesGuard], data: { expectedRole: ["CLIENTE"] }
  },

  { path: "revisar-productos", component: RevisarProductosComponent, canActivate: [RolesGuard], data: { expectedRole: ["MODERADOR"] } }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
