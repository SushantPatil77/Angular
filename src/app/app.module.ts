import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { TempleteDrivenFromComponent } from './templete-driven-from/templete-driven-from.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    FormBuilderComponent,
    TempleteDrivenFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
