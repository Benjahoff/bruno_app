import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  RouteReuseStrategy
} from '@angular/router';

import {
  IonicModule,
  IonicRouteStrategy
} from '@ionic/angular';

import {
  AppComponent
} from './app.component';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  ComponentsModule
} from './components/components.module';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),        
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot('G-TNN2WLQQ7J'),
    NgxGoogleAnalyticsRouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy, 
  },
  Device,
  MobileAccessibility,
  ScreenOrientation
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}




