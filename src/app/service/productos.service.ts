import { Injectable } from '@angular/core';
import { producto } from '../interfaces/producto';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listproducto: producto[] = [
    {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
    {nombre: 'Thermogenes', categoria: 'Quemador de grasa', precio: 1.559, presentacion: 'Caja'},
    {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
    {nombre: 'cafezzino', categoria: 'Quemador de grasa', precio: 1.559, presentacion: 'Caja'},
    {nombre: 'Power', categoria: 'Energizante', precio: 1.079, presentacion: 'Caja'},
    {nombre: 'Aqtua', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
    {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'Botella'},
    {nombre: 'Biocros', categoria: 'Energizante', precio: 1.079, presentacion: 'caja'},
  
  ];


  constructor() { }


getProducto(){
  return this.listproducto.slice();
}

eliminarProducto(index:number){
  this.listproducto.splice(index ,1);
}
agreggarProducto(producto:producto){
  this.listproducto.unshift(producto);
}

}



