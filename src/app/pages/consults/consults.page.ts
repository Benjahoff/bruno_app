import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ScanService } from '../../services/scan.service';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.page.html',
  styleUrls: ['./consults.page.scss'],
})
export class ConsultsPage implements OnInit {

  consults: any []
  isLoading: boolean

  constructor(private route: Router, public translate: TranslateService, private _scanService: ScanService, private device: Device) { }

  ngOnInit() {
    this.getConsults()
  }

  returnHome(){
    this.route.navigate(['choice']);
  }

  getConsults(){
    //let ee = '5c87d62135d7f8b4'
    // this.device.uuid
    const data = {      
      device: this.device.uuid
    }
    this.isLoading = true;      
    
    this._scanService.getConsults(data).subscribe(resp => {
      this.isLoading = false;  
      console.log(resp);
      this.consults = resp['consults']      
    }, err => {
      console.warn(err);
      this.isLoading = false;          
    }); 
  }

  verConsulta(item: any){
    localStorage.setItem("consult", JSON.stringify(item));
    this.route.navigate(['consult']);
  }

}
