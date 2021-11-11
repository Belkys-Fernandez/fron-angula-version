import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     ReactiveFormsModule,
     MatTooltipModule,
     
    
     MatSnackBarModule,  
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatIconModule,
      HttpClientModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatCardModule,
      MatGridListModule,
      MatSelectModule
      

  ],
  exports:[
    MatSliderModule,
    MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     ReactiveFormsModule,
     MatTooltipModule,
    
     MatSnackBarModule,  
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatIconModule, 
      HttpClientModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatCardModule,
      MatGridListModule,
      MatSelectModule

  ]
   

})
export class CompartirModuloModule { }
