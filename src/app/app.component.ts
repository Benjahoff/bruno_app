import { Component } from '@angular/core';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( mobileAccessibility: MobileAccessibility, platform: Platform,  private translate: TranslateService) {

    platform
      .ready()
      .then(()=>{
          mobileAccessibility.usePreferredTextZoom(false);
      });
    
    this.initializeApp();
  }

  initializeApp(){

    this.translate.setDefaultLang(this.translate.getBrowserLang()); 
    this.translate.currentLang =this.translate.getBrowserLang();
  }


}
