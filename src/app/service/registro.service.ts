import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  
  constructor(private http:HttpClient) { 

  }

  RegistrarUsuario(usuario: string, nombre: string, apellido:string,cuenta:string, password :string,) {
    const body = {usuario:usuario, nombre:nombre, password:password};
    return this.http.post('https://backend-angular-edi.herokuapp.com/Usuarios/registrarUsuario', body);
  }
  buscarUsuario(usuario:string, password:string){
    const body = {usuario, password};
    return this.http.post('https://backend-angular-edi.herokuapp.com/Usuarios/buscarUsuario', body);

  }
}
