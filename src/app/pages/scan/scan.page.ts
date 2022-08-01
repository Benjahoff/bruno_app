import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScanService } from 'src/app/services/scan.service';
import { TranslateService } from '@ngx-translate/core';
import { Device } from '@ionic-native/device/ngx';
import { PhotoService } from '../../services/photo.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import * as product from './BPC_3.json';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  /* Captured image  */
  image = null;
  type: string;
  consultaId: number;
  printLoad: boolean = false;
  /* Check if the camera is active */
  cameraActive = false;

  /* Check if the button must redirect or emit an event */
  //routeLink = false;

  /* Response ingredients list */
  ingredientsList: {} = null;

  isLoading: boolean;
  public langs: any;

  constructor(
    private ac: ActivatedRoute,
    private route: Router,
    private _scanService: ScanService,
    public photoService: PhotoService,
    public translate: TranslateService,
    private device: Device,
  ) {}

  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ac.params.subscribe((routeParams) => {
      this.type = routeParams.type;
    });
  }

  /**
   * Everytime that the user enter into this view this method is executed
   */
  async ionViewWillEnter() {
    this.langs = this.translate.currentLang;
    this.ingredientsList = null;
    this.cameraActive = true;
    //await this.addPhotoToGallery()

    //this.openCamera();
  }

  tekeAgain() {
    this.cameraActive = true;
  }

  /**
   * Open the camera
   */
  /* openCamera(){
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview',
      toBack: true
    };
    CameraPreview.start(cameraPreviewOptions).then(()=>{
      this.cameraActive = true;
    }, (err)=>{
      console.log("error apertura camara");
    }
    );
  } */

  /**
   * Stop the camera
   */
  /* async stopCamera(){
    await CameraPreview.stop();
    this.cameraActive = false;
  } */

  /**
   * Capture image
   */
  /* async captureImage(){
    const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 90
    }
    const result = await CameraPreview.capture(cameraPreviewPictureOptions);
    this.image = 'data:image/jpeg;base64,' + result.value;
    this.stopCamera();
  } */

  /**
   * Return to home page
   */
  returnHome() {
    this.route.navigate(['scan-info']);
    /* this.stopCamera().then( r => {
    }); */
  }

  returnChoice() {
    this.route.navigate(['scan-info']);
    /* this.stopCamera().then( r => {
    }); */
  }

  /**
   * Request to the backend to save photo and analize ingredients
   */
  sendPhoto() {
    //this.stopCamera().then( r => {
    this.isLoading = true;

    console.log(this.photoService.savedFile);
    console.log(this.photoService.webPath);
    let imagedata = this.photoService.savedFile.split(',')[1];
    //
    //image: 'prueba',
    //image: imagedata,

    const data = {
      image: imagedata,
      code: '2y12U9.BrhUsFQvQzCXNQOWrAe4wIG9qo9H4DZ.BdJUQvTeQv/LKtC89e',
      device: this.device.uuid,
      lang: this.langs,
      type: this.type,
    };
    console.log('Los datos', data);

    this._scanService.sendPhoto(data).subscribe(
      (resp) => {
        this.isLoading = false;
        this.ingredientsList = resp['data'];
        //this.ingredientsList['product'] = [];
        this.ingredientsList['product'] = product['default']['data']['product'];
        this.consultaId = resp['consulta'];
        console.log('Lista ', this.ingredientsList);
      },
      (err) => {
        console.warn(err);
        this.isLoading = false;
      }
    );
    //});
  }


  downloadFile() {
    this._scanService.generatePdfConsultLink(this.consultaId).subscribe(
      (resp) => {
        window.open(resp['link']);
        this.printLoad = false;
      },
      (err) => {
        this.printLoad = false;
      }
    );
  }

  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    if (this.photoService.photos.length == 0) {
      //this.returnChoice()
      this.cameraActive = true;
      return;
    }
    console.log(this.photoService);
    this.image = this.photoService.photos[0].webViewPath || [];
    this.cameraActive = false;
  }

  async selectToGallery() {
    await this.photoService.selectToGallery();
    if (this.photoService.photos.length == 0) {
      //this.returnChoice()
      this.cameraActive = true;
      return;
    }
    console.log(this.photoService);
    this.image = this.photoService.photos[0].webViewPath || [];
    this.cameraActive = false;
  }

  selectFile() {
    this.route.navigate(['select-file/' + this.type]);
  }
}
