import { ModalBusquedaPage } from '../../components/modal-busqueda/modal-busqueda.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-scan-info',
  templateUrl: './scan-info.page.html',
  styleUrls: ['./scan-info.page.scss'],
})
export class ScanInfoPage implements OnInit {

  routeLink = "choice";
  constructor(public modalCtrl: ModalController,  private route: Router, public translate: TranslateService) { }

  ngOnInit() {
  }

  returnHome(){
    this.route.navigate(['home']);
  }

  redirect(){
    /* if(this.loading){
      return;
    }    
    this.emitClick.emit(); */
    if(this.routeLink){
      this.route.navigate([this.routeLink]);
    }
  }

  btnChoice(type: string){
    this.route.navigate(['scan/'+type]);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalBusquedaPage
    })
    await modal.present();
  }
}
