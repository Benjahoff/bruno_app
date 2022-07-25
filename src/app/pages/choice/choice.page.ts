import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
})
export class ChoicePage implements OnInit {

  routeLink = "scan";
  routeLink2 = "consults";

  constructor(private route: Router, public translate: TranslateService) { }

  ngOnInit() {
    
  }

  returnHome(){
    this.route.navigate(['home']);
  }

  btnChoice(type: string){

    //this.route.navigate(['camera']);
    this.route.navigate(['scan/'+type]);
  }

  

}
