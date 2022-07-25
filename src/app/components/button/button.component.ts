import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string;
  @Input() routeLink: string = null;
  @Input() primary = true;
  @Input() loading = false;
  @Output() emitClick = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit() {}

  redirect(){
    if(this.loading){
      return;
    }    
    this.emitClick.emit();
    if(this.routeLink){
      this.route.navigate([this.routeLink]);
    }
  }

}
