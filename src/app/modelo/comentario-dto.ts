export class ComentarioDTO {

  comentario: string;
  idProducto: number;
  idUsuario: number;

  constructor(comentario: string, idProducto: number, idUsuario: number){
    this.comentario = comentario;
    this.idProducto = idProducto;
    this.idUsuario = idUsuario;
  }
}
