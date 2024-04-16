import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { TempleteDrivenFromComponent } from './templete-driven-from/templete-driven-from.component';
import { ParentComponetComponent } from './parent-componet/parent-componet.component';
import { ChildComponetComponent } from './child-componet/child-componet.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    FormBuilderComponent,
    TempleteDrivenFromComponent,
    ParentComponetComponent,
    ChildComponetComponent,
    FatherComponent,
    SonComponent
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
