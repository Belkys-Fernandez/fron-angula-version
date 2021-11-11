import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/service/usuarios.service';





@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

 listUsuario:Usuario[]=[];



  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo' ,'acciones'];
 
  dataSource! :MatTableDataSource<any>;

   //de paginacion
  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;


  constructor( private _usuarioService: UsuarioService,  private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
  this.listUsuario= this._usuarioService.getUsuario();
  this.dataSource= new MatTableDataSource(  this.listUsuario)

  }

  ngAfterViewInit(){
    this.dataSource.paginator= this.paginator; 
    this.dataSource.sort=this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  eliminarUsuario (index: number){
   
    this._usuarioService.eliminarUsuario(index);
   -this.cargarUsuario();

   this._snackBar.open('Usuario fue eliminadocon exito','',  {
    duration:1500,
    horizontalPosition:'center',
    verticalPosition:'top'

  })
  }
 

}
