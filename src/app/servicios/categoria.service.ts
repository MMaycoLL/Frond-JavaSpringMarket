import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private catURL = "http://localhost:8080/api/producto";
  constructor(private http: HttpClient) { }

  public listar(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.catURL}/listarCategorias`);
  }
}
