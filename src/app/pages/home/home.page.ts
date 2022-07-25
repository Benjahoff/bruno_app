import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScanService } from '../../services/scan.service';
import { Device } from '@ionic-native/device/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  times: number = 0  
  routeLink = "scan-info";

  constructor(public translate: TranslateService,private route: Router, private _scanService: ScanService, private device: Device, public alertController: AlertController) {
    
  }

  ngOnInit() {

    const data = {
      device: this.device.uuid
    }
    this._scanService.getTimes(data).subscribe(
      (resp) => {
        console.log(resp);

        if(resp.times){
          console.log(this.times);
          this.presentAlertConfirm()
        }
        if(resp.satisfaccion == "" || resp.satisfaccion == "tarde"){
          this.presentAlertConfirmSatisfaccion()
        }
      }
    )
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: this.translate.instant("feedback.text1"),      
      message: this.translate.instant("feedback.text2")+'<br><strong>'+this.translate.instant("feedback.text3")+'</strong>',
      animated: true,
      cssClass: 'alert-class',
      buttons: [
        {
          text: this.translate.instant("feedback.confirm"),
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Okay');
            this.setFeedback('ok')
            window.open(this.translate.instant("feedback.linkFeedback"), '_system');
          }
        },
        {
          text: this.translate.instant("feedback.cancel"),
          role: 'cancel',          
          cssClass: 'secondary',
          handler: (blah) => {
            this.setFeedback('cancel')
          }
        }
      ]
    });

    await alert.present();
  }

  setFeedback(tipo: any){
    const data = {
      device: this.device.uuid,
      tipo: tipo
    }
    this._scanService.setFeedback(data).subscribe(
      (resp) => {
        console.log(tipo);         
      }
    )
  }

  redirect(){
    if(this.routeLink){
      this.route.navigate([this.routeLink]);
    }
  }

  async presentAlertConfirmSatisfaccion() {
    const alert = await this.alertController.create({
      header: this.translate.instant("check.title"),      
      //message: this.translate.instant("feedback.text2")+'<br><strong>'+this.translate.instant("feedback.text3")+'</strong>',
      animated: true,
      cssClass: 'alert-class',
      buttons: [
        {
          text: this.translate.instant("check.answer1"),
          cssClass: 'secondary',
          handler: () => {            
            this.setFeedback('muy')            
          }
        },
        {
          text: this.translate.instant("check.answer2"),                    
          cssClass: 'secondary',
          handler: (blah) => {
            this.setFeedbackSatisfaccion('poco')
          }
        },
        {
          text: this.translate.instant("check.answer3"),                    
          cssClass: 'secondary',
          handler: (blah) => {
            this.setFeedbackSatisfaccion('nada')
          }
        }
        ,
        {
          text: this.translate.instant("check.answer4"),                    
          cssClass: 'secondary',
          handler: (blah) => {
            this.setFeedbackSatisfaccion('tarde')
          }
        }
      ]
    });

    await alert.present();
  }

  setFeedbackSatisfaccion(tipo: any){
    const data = {      
      device: this.device.uuid,
      tipo: tipo
    }
    this._scanService.setFeedbackSatisfaccion(data).subscribe(
      (resp) => {
        console.log(tipo);         
      }
    )
  }


}
