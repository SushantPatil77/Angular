import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
   items =['item1','item2','item3']
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(event:string){
    this.items.push(event)
  }

}
