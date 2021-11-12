import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cargaSpinner=true ;
  usu:any;
  cont:any;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar,private router:Router ,private api:RegistroService) {
    if (sessionStorage.getItem('token')==' valido')
    this.router.navigate(['/tablero']);

    this.form= this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  entrar(){
    sessionStorage.setItem('token', 'valido');
    this.router.navigate(['registro']);
  }
 registro(){
   this.router.navigate(['registro'])
 }
 ingresar(){
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.api.buscarUsuario(
      this.form.value.correo,
      this.form.value.password).subscribe(resp => {
        console.log(resp);
        this.entrar();
        this.load(this.form.value.correo, this.form.value.password);
      });
  }

  load(usu:any, contraseña:any){
    this.usu = localStorage.getItem(usu);
    this.cont = localStorage.getItem(contraseña);
}
 
   
  ingresarR(){
    const usuario=this.form.value.usuario;
    const password=this.form.value.password ;
  
    if (usuario=='belkys' && password== '123') {
      this.fakecarga();
    

    }else{
      this.error(); 
      this.form.reset();
    }

  }
  error(){
    this._snackBar.open('Usuario o contraseña  ingresado son invalido','',  {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top'

    })
  }
  fakecarga(){
    this.cargaSpinner=true;
    setTimeout(()=> {
      //redireccionamos
      this.router.navigate(['tablero']);
      this.cargaSpinner=false;
    }, 10);
  }
  
}