import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuario: Usuario[] = [

    {usuario: "Jfernandez" , nombre: 'Flor', apellido: "Fernandez", cuenta: 'F' ,password:'123'}
  ];


  constructor() { }
getUsuario(){
  return this.listUsuario.slice();
}
 eliminarUsuario(index: number ){
  this.listUsuario.splice(index, 1 );
 } 
 agregarUsuario( usuario: Usuario){
   this.listUsuario.unshift( usuario);
 }


}
