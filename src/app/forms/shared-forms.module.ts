import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TDFComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [TDFComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TDFComponent]
})
export class SharedFormsModule { }
