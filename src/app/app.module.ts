import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompartirModuloModule } from './component/compartModulos/compartir-modulo.module';




import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartirModuloModule,
    HttpClientModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
