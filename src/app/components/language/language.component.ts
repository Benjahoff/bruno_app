import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {

  public items: any = [];
  public expand: boolean = false
  public sigla: string;
  public langs: any;
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.langs = this.translate.getLangs();
    this.sigla = this.langs[0];    
    this.items = [
      { 
        languaje: this.translate.instant('lang.es'),
        sigla: "es"
      },
      { 
        languaje: this.translate.instant('lang.en'), 
        sigla: "en"

      },
      { 
        languaje: this.translate.instant('lang.pt'), 
        sigla: "pt"
      },
      { 
        languaje: this.translate.instant('lang.it'), 
        sigla: "it"
      }      
    ];
    if((this.sigla != "es")&&(this.sigla != "en")&&(this.sigla != "pt")&&(this.sigla != "it")){      
      this.selectItem(this.items[0])
    }

  }

  expandItem(){
    this.expand = !this.expand;
  }

  selectItem(item: any){    
    this.sigla = item.sigla;
    this.translate.use(this.sigla);
    this.translate.currentLang = this.sigla
    this.items = [
      { 
        languaje: this.translate.instant('lang.es'),
        sigla: "es"
      },
      { 
        languaje: this.translate.instant('lang.en'), 
        sigla: "en"
      },
      { 
        languaje: this.translate.instant('lang.pt'), 
        sigla: "pt"
      },
      { 
        languaje: this.translate.instant('lang.it'), 
        sigla: "it"
      }    
    ];

  }
}
