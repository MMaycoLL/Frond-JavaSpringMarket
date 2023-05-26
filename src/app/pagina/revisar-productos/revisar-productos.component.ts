import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoModeradorDTO } from 'src/app/modelo/producto-moderador-dto';
import { ModeradorService } from 'src/app/servicios/moderador.service';
import { TokenService } from 'src/app/servicios/token.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-revisar-productos',
  templateUrl: './revisar-productos.component.html',
  styleUrls: ['./revisar-productos.component.css']
})
export class RevisarProductosComponent {
  productos: ProductoGetDTO[] = [];
  alerta!: Alerta;
  moderador: ProductoModeradorDTO;
  estado!: string;
  mostrarMotivo: boolean = false;
  motivo: string = '';

  constructor(private moderadorService: ModeradorService, private tokenService: TokenService) {
    this.moderador = new ProductoModeradorDTO();
  }

  public aprobarProducto(idProducto: number, motivo: string): void {
    const aprobarProducto: ProductoModeradorDTO = {
      fechaAutorizacion: new Date(),
      motivo: motivo,
      idModerador: this.tokenService.getId(),
      idProducto: idProducto
    };

    this.moderadorService.aprobarProducto(aprobarProducto).subscribe({
      next: data => {
        console.log('Producto aprobado:', data);
      },
      error: error => {
        console.log('Error al aprobar el producto:', error);
      }
    });
  }


  public rechazarProducto(idProducto: number, motivo: string) {
    const rechazarProducto: ProductoModeradorDTO = {
      fechaAutorizacion: new Date(),
      motivo: motivo,
      idModerador: this.tokenService.getId(),
      idProducto: idProducto
          };



    this.moderadorService.rechazarProducto(rechazarProducto).subscribe({
      next: data => {
        console.log('Producto rechazado:', data);
      },
      error: error => {
        console.log('Error al rechazar el producto:', error);
      }

    });

  }

  public listarSinRevisar() {
    const objeto = this;
    this.estado = "SinRevisar";

    console.log("listarSinRevisar");

    this.moderadorService.listarSinRevisar().subscribe({
      next: data => {

        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });

  }

  public listarAutorizados() {
    const objeto = this;
    this.estado = "Autorizados";
    console.log("listarAutorizados")

    this.moderadorService.listarAutorizados().subscribe({
      next: data => {
        this.productos = data.respuesta;
        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });

  }

  public listarDenegados() {
    this.estado = "Denegados";
    const objeto = this;
    console.log("listarDenegados");

    this.moderadorService.listarDenegados().subscribe({
      next: data => {
        this.productos = data.respuesta;
        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });

  }



}
