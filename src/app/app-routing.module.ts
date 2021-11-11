import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
{path:'',redirectTo:'login', pathMatch:'full'},
{path:'login' , component:LoginComponent},
{path:'tablero', loadChildren:()=>import('./component/tablero/tablero.module').then(x=>x.TableroModule)},
{path:'**',redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
