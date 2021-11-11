import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

import { producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/service/productos.service';


 




@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  listProducto: producto[]=[];

  displayedColumns: string[] = ['nombre', 'categoria', 'precio', 'presentacion','acciones'];
  dataSource!: MatTableDataSource<any> ;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private _productoService:ProductoService ,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.cargarproducto();

  }
  cargarproducto(){
    this.listProducto= this._productoService.getProducto();
    this.dataSource = new MatTableDataSource( this.listProducto);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarProducto(index:number){
    console.log(index);
    this._productoService.eliminarProducto(index);
    this.cargarproducto();

    this._snackBar.open('El producto fue ELIMINADO  con exito','',  {
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'top'

    })
  }



}
