import { ListModalComponent } from './list-modal/list-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list.component';
import { WaitComponent } from './wait/wait.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ExpandableComponent } from "./expandable/expandable.component";  
import { LanguageComponent } from './language/language.component';
import { ModalBusquedaPage } from './modal-busqueda/modal-busqueda.page';
import { FormsModule } from '@angular/forms';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    ButtonComponent,
    ListComponent,
    WaitComponent,
    ExpandableComponent,
    LanguageComponent,
    ListModalComponent,
    ModalBusquedaPage
  ],
  exports: [
    ButtonComponent,
    ListComponent,
    WaitComponent,
    WaitComponent,
    LanguageComponent,
    ListModalComponent,
    ExpandableComponent,
    ModalBusquedaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class ComponentsModule { }
