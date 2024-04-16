import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm =new FormGroup({
     firstName:new FormControl(''),
     lastName :new FormControl(''),
     age: new FormControl('')
      })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.profileForm.value);
  }

}
