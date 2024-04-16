import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  
    profileForm =this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''], 
        zip: ['']
      })
     })
  


  constructor(private fb:FormBuilder) { 

  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.profileForm.value);
  }
}
