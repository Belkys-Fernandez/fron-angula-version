import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cargaSpinner=true ;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar,private router:Router) {
    this.form= this.fb.group({
      usuario:['',Validators.required],
      passwork:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
   
  ingresar(){
    const usuario=this.form.value.usuario;
    const passwork=this.form.value.passwork ;
  
    if (usuario=='belkys' && passwork== '123') {
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