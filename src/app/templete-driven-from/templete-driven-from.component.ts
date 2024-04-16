import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-driven-from',
  templateUrl: './templete-driven-from.component.html',
  styleUrls: ['./templete-driven-from.component.css']
})
export class TempleteDrivenFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(formdata:any){
    console.log(formdata);
  }
}
