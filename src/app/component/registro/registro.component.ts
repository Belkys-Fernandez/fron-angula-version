import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioRegistro!:FormGroup;

  cargaSpinner!:true;
  
  constructor(private api:RegistroService, private router:Router, private fb:FormBuilder) { 
      this.formularioRegistro= this.fb.group({
        usuario: ["",[Validators.required, Validators.minLength(7), Validators.maxLength(9)]],
        nombre: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
        apellido: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
        cuenta: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
        password: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],

      });
  }
  
  ngOnInit(): void {
  }

  
  registrar(){
      alert('Creación de Usuario');
  }

  atras(){
      this.router.navigate(['/login']);
  }
  CrearUsuario(){
    if (this.formularioRegistro.invalid) {
      return;
    }

    console.log(this.formularioRegistro.value);

    this.api.RegistrarUsuario(this.formularioRegistro.value.usuario, 
      this.formularioRegistro.value.nombre, 
      this.formularioRegistro.value.apellido,
      this.formularioRegistro.value.cuenta, 
      this.formularioRegistro.value.password).subscribe(resp => {console.log(resp);
       alert("Usuario Creado con exito")
   })
 }

      
        

}

