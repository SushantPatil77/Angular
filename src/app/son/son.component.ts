import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Output() newItem= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onclick(value:string){
    this.newItem.emit(value);
  }
}
