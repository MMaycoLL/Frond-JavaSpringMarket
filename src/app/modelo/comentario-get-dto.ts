export class ComentarioGetDTO {

  idComentario: number;
  fechaComentario: Date;
  comentario: string;
  idProducto: number;
  idUsuario: number;

  constructor(idComentario: number, fechaComentario: Date, comentario: string, idProducto: number, idUsuario: number) {
    this.idComentario = idComentario;
    this.fechaComentario = fechaComentario;
    this.comentario = comentario;
    this.idProducto = idProducto;
    this.idUsuario = idUsuario;
  }
}
