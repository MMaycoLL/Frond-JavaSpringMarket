import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioGetDTO } from '../modelo/usuario-get-dto';
import { UsuarioDTO } from '../modelo/usuario-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userUrl = "https://back-javaspringmarket-production-e786.up.railway.app/api/usuario";
  constructor(private http: HttpClient) { }

  public obtener(idUsuario: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/${idUsuario}`);
  }
  public eliminar(idUsuario: number, contrasenia: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/${idUsuario}/${contrasenia}`);
  }
  public actualizar(idUsuario: number,contrasenia: string, usuario: UsuarioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/${idUsuario}/${contrasenia}/`, usuario);
  }
}
