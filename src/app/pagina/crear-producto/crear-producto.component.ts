import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  producto: ProductoDTO;
  categorias: string[];
  archivos!: FileList;
  esEdicion: boolean = false;
  codigoProducto: number = 0;

  constructor(
    private imagenService: ImagenService,
    private servicio: CategoriaService,
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {
    this.categorias = [];
    this.producto = new ProductoDTO();
    this.route.params.subscribe(params => {
      this.codigoProducto = params["codigo"];
      let objetoProducto = this.productoService.obtener(this.codigoProducto);
      if (objetoProducto != null) {
        this.producto = objetoProducto;
        this.esEdicion = true;
      }
    });
  }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.servicio.listar().subscribe(
      (resultado) => {
        this.categorias = resultado.respuesta;
        console.log(this.categorias);

      },
    );
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      console.log(this.archivos);
    }
  }

  public crearProducto() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.producto);
    } else {
      console.log('Debe seleccionar al menos una imagen');
    }
  }

  public subirImagenes() {
    if (this.archivos != null && this.archivos.length > 0) {
      const objeto = this.producto;
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          objeto.imagenes.push(data.respuesta.url);
        },
        error: error => {
          console.log(error.error);
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

  public toggleCategoria(categoria: string) {
    if (this.producto.categorias.includes(categoria)) {
      // Si la categoría ya está seleccionada, la eliminamos del arreglo
      this.producto.categorias = this.producto.categorias.filter(cat => cat !== categoria);
    } else {
      // Si la categoría no está seleccionada, la agregamos al arreglo
      this.producto.categorias.push(categoria);
    }
  }


}


