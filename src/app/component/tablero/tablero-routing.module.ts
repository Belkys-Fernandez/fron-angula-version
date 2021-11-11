import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TableroComponent } from './tablero.component';
import { InicioComponent } from './inicio/inicio.component';

import { UsuarioComponent } from './usuario/usuario.component';

import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { CrearProductoComponent } from './reportes/crear-producto/crear-producto.component';

const routes: Routes = [
  {path:'', component: TableroComponent, children:[
    { path:'',component: InicioComponent},
    { path:'usuario',component: UsuarioComponent},
    { path:'reportes',component: ReportesComponent},
    { path:'crear-usuario',component: CrearUsuarioComponent},
    {path:'crear-producto', component:CrearProductoComponent}
  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroRoutingModule { }
