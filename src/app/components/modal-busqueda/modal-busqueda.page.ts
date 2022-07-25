import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScanService } from 'src/app/services/scan.service';
import * as ingredients from './ingredient.json';

@Component({
  selector: 'app-modal-busqueda',
  templateUrl: './modal-busqueda.page.html',
  styleUrls: ['./modal-busqueda.page.scss'],
})
export class ModalBusquedaPage implements OnInit {

  loading:boolean = false;
  ingredient:string = "";
  ingredients:any=[];

  constructor(private modalCtrl: ModalController, private _scanService: ScanService) { 
    console.log(this.ingredients);
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  search(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.ingredients = ingredients['default']['data']['ingredients'];
    }, 3000);
    //this._scanService.search(this.ingredient).subscribe((res)=>console.log(res))
    if (this.ingredient.trim().length > 1) {
    }
  }


}
