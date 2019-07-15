import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedFormsModule } from './forms/shared-forms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormControlsComponent } from './ex-angular-material/Components/form-controls/form-controls.component';
@NgModule({
  declarations: [
    AppComponent,
    FormControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
