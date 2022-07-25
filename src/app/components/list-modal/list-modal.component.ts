import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss'],
})
export class ListModalComponent implements OnInit {
  @Input('ingredients') ingredients: any;

  constructor() { 
    console.log(this.ingredients);
  }

  ngOnInit() {}

  expandItem(ingredient): void {
    ingredient['open'] = !ingredient['open'];
  }

}
