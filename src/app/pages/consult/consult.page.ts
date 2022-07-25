import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ENDPOINT } from '../../utils/endpoint';
import { ScanService } from '../../services/scan.service';


@Component({
  selector: 'app-consult',
  templateUrl: './consult.page.html',
  styleUrls: ['./consult.page.scss'],
})
export class ConsultPage implements OnInit {

  isLoading: boolean
  myConsult: any 
  isCollapsedimg: boolean
  isCollapseding: boolean
  isCollapsedtex: boolean
  ruta: any
  detalleIngredientes: any []
  ingredientes: any []

  constructor(private route: Router, public translate: TranslateService, private _scanService: ScanService) { 
    this.ruta = `${ENDPOINT}/`;
  }

  ngOnInit() {
    this.getConsult()    

  }
  
  ngAfterViewInit(): void {    
    this.getConsult()    
  }

  returnHome(){
    localStorage.removeItem("consult");
    this.route.navigate(['consults']);
  }

  getConsult(){
    
    this.isCollapsedimg = false
    this.isCollapseding = false
    this.isCollapsedtex = false
    this.isLoading = true;   
    this.myConsult = JSON.parse(localStorage['consult'] || '{}')
    this.recargar(this.myConsult)
    
    this.isLoading = false;   

  }

  changeExpande(item){
    console.log(item,"item1");
    item['collapse'] = !item['collapse']
    console.log(item,"item2");

  }

  recargar(consulta: any): void {
    console.log(consulta);
    this.ingredientes = consulta['ingredientes']          
  }  

  downloadPDF(id: any){
    this.isCollapseding = false
    this.isCollapsedtex = false
    this.isCollapsedimg = false
    this._scanService.generatePdfConsultLink(id).subscribe(
      (resp) => {
        window.open(resp['link'])        
      }
    )
  }

  collapseIng(){    
    this.isCollapsedimg = false
    this.isCollapsedtex = false
    this.isCollapseding = !this.isCollapseding
  }

  collapseImg(){    
    this.isCollapseding = false
    this.isCollapsedtex = false
    this.isCollapsedimg = !this.isCollapsedimg
  }

  collapseTex(){    
    this.isCollapseding = false
    this.isCollapsedtex = false
    this.isCollapsedtex = !this.isCollapsedtex
  }
}
