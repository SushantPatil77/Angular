import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-componet',
  templateUrl: './child-componet.component.html',
  styleUrls: ['./child-componet.component.css']
})
export class ChildComponetComponent implements OnInit {
  @Input() item = ''; 

  constructor() { 
    
  }

  ngOnInit(): void {
  }


}
