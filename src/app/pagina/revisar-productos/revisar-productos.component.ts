import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoModeradorDTO } from 'src/app/modelo/producto-moderador-dto';
import { ModeradorService } from 'src/app/servicios/moderador.service';

@Component({
  selector: 'app-revisar-productos',
  templateUrl: './revisar-productos.component.html',
  styleUrls: ['./revisar-productos.component.css']
})
export class RevisarProductosComponent {

  productos: ProductoGetDTO[] = [];
  alerta!: Alerta;
  moderador: ProductoModeradorDTO;

  constructor(private moderadorService: ModeradorService) {
    this.moderador = new ProductoModeradorDTO();
  }

  public aprobarProducto() {
    const objeto = this;

    console.log("this.aprobarProducto");

    this.moderadorService.aprobarProducto(this.moderador).subscribe({
      next: data => {
        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });

  }

  public rechazarProducto() {
    const objeto = this;

    console.log("this.rechazarProducto");

    this.moderadorService.rechazarProducto(this.moderador).subscribe({
      next: data => {
        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });

  }

  public listarSinRevisar() {
    const objeto = this;

    console.log("listarSinRevisar");

    this.moderadorService.listarSinRevisar().subscribe({
      next: data => {
        this.productos = data.respuesta;
        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });

  }

  public listarAutorizados() {
    const objeto = this;
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
