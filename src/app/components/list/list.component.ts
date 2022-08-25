import { ModalBusquedaPage } from './../modal-busqueda/modal-busqueda.page';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input('ingredientsList') ingredientsList: any;
  @Output('listButtonEvent') listButtonEvent = new EventEmitter<any>();
  @Output('pdfButtonEvent') pdfButtonEvent = new EventEmitter<any>();

  public langs: any;
  commentValue: string = '';
  found: boolean = false;
  isProduct: boolean = false;
  productData: any;
  ingredients: any;
  category: any;
  urlImage: string;
  constructor(
    public translate: TranslateService,
    private route: Router,
    private Acroute: ActivatedRoute,
    private modalCtrl: ModalController
  ) {
    this.category = this.Acroute.snapshot.paramMap.get('type');
    if (this.category == 6) {
      this.urlImage = 'Food.png';
    } else {
      if (this.category == 3) {
        this.urlImage = 'Beauty.png';
      }
    }
    //6 food
    //3 beauty
  }

  ngOnInit() {
    //si es producto
    if ( this.ingredientsList['product'] && this.ingredientsList['product'] !== []) {
      if (this.ingredientsList['product']['ingredients']) {
        this.ingredients = this.ingredientsList['product']['ingredients']['ing'];
        this.found = true;
        this.isProduct = true;
      }
    } else {
      //si es ingredientes
      if (this.ingredientsList['ingredientes'] != null) {
        if (this.ingredientsList['ingredientes'].length > 0) {
          this.ingredients = this.ingredientsList['ingredientes'];
          this.found = true;
        }
      }
    }
  }

  expandItem(item): void {
    //if (item[4]) {
    item[5] = !item[5];
    //} else {
    /* this.ingredientsList.map(listItem => {
        if (item == listItem) {
          listItem[4] = !listItem[4];
        } else {
          listItem[4] = false;
        }
        return listItem;
      }); */
    //}
  }

  finalizar() {
    this.route.navigate(['scan-info']);
  }

  returnHome() {
    this.route.navigate(['scan-info']);
  }

  btnSend() {
    this.route.navigate(['send']);
  }

  goToShop(){
    window.open('https://www.idealo.es/cat/11153/comida-para-perros.html', '_system');
  }

  feedback() {
    this.langs = this.translate.currentLang;
    window.open('https://www.brunomovement.in/en/all-products/', '_system');

    /* switch(this.langs) {
      case "es": {
        window.open('https://479umigyc0j.typeform.com/to/k7f0KUyU', '_system');
        break;
      }
      case "en": {
        window.open('https://479umigyc0j.typeform.com/to/pHkBbCnN', '_system');
        break;
      }
      case "pt": {
        window.open('https://479umigyc0j.typeform.com/to/FOBWyMtT', '_system');
        break;
      }
      case "it": {
        window.open('https://479umigyc0j.typeform.com/to/dNh4inUX', '_system');
        break;
      }
      default: {
        window.open('https://479umigyc0j.typeform.com/to/pHkBbCnN', '_system');
        break;
      }
    }  */
  }

  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalBusquedaPage
    })
    await modal.present();
  }
}
