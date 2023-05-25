export class CalificacionDTO {

  valorCalificacion: number;
  comentarioCalificacion: string;
  idUsuario: number;
  idDetalleCompra: number;

  constructor(valorCalificacion: number, comentarioCalificacion: string, idUsuario: number, idDetalleCompra: number){
    this.valorCalificacion = valorCalificacion;
    this.comentarioCalificacion = comentarioCalificacion;
    this.idUsuario = idUsuario;
    this.idDetalleCompra = idDetalleCompra;
  }
}
