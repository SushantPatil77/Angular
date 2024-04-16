import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-componet',
  templateUrl: './parent-componet.component.html',
  styleUrls: ['./parent-componet.component.css']
})
export class ParentComponetComponent implements OnInit {
  currentItem= 'Sushant';
  constructor() { }

  ngOnInit(): void {
  }

}
