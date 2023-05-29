import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ProductoModeradorDTO } from '../modelo/producto-moderador-dto';

@Injectable({
  providedIn: 'root'
})
export class ModeradorService {

  private userUrl = "https://back-javaspringmarket-production-e786.up.railway.app/api/productoModerador";

  constructor(private http: HttpClient) { }

  public aprobarProducto(aprobarProducto: ProductoModeradorDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/aprobar`, aprobarProducto);
  }

  public rechazarProducto(rechazarProducto: ProductoModeradorDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/rechazar`, rechazarProducto);
  }

  public listarSinRevisar(estado: string = "SIN_REVISAR"): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarEstado/${estado}`);
  }

  public listarAutorizados(estado: string = "ACTIVO"): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarEstado/${estado}`);
  }

  public listarDenegados(estado: string = "INACTIVO"): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarEstado/${estado}`);
  }

}
