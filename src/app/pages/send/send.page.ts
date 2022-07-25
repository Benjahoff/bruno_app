import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ScanService } from 'src/app/services/scan.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  isLoading: boolean = false;
  nombre: string = '';
  product: string = '';
  mail: string = '';
  message: string = '';
  validacion: boolean = true;
  enviado: boolean = false;

  constructor(private route: Router, private _scanService: ScanService, public translate: TranslateService) { }

  ngOnInit() {
  }

  returnHome(){
    this.route.navigate(['choice']);
  }


  validarForm(){
    if((this.nombre == "")||(this.product == "")||(this.mail == "")||(this.message == "")||(this.mail.indexOf("@") < 1)||(this.mail.indexOf(".") < 1)){
      this.validacion = true;
    }
    else{
      this.validacion = false;
    }
  }

  sendMessage(){
    //this.validarForm();

    if(!this.validacion){
      this.isLoading = true;
      const data = {
        
        name: this.nombre,
        product: this.product,
        mail: this.mail,
        message: this.message      
      }
      console.log("Los datos", data);
    
      this._scanService.sendMessage(data).subscribe( resp => {
        this.isLoading = false;
        this.enviado = true;
        var refreshIntervalId = setInterval(function(){
          clearInterval(refreshIntervalId);
          this.route.navigate(['choice']);        
        }.bind(this), 5000);
      }, err => {
        console.warn(err);
        this.isLoading = false;          
      }); 
    }
  }

  
}
