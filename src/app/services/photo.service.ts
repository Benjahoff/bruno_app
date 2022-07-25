import { Injectable } from '@angular/core';
import { Photo, CameraResultType, CameraSource, Camera } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Storage } from '@capacitor/storage'
import { Foto} from '../models/photo.interface'


@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  savedFile: any
  webPath: any
  photos: Foto[] = []
  images: string[] = [];
  private PHOTO_STORAGE: string = "fotos"
  constructor() { }

  public async addNewToGallery() {
   
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      allowEditing: false,        
      source: CameraSource.Camera,
      quality: 80
    })
    .then(async(fc) => { 
      const saveImageFile = await this.savePhoto(fc)
      this.photos.unshift(saveImageFile)
    
    /* Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    }) */
    })
    .catch(() => {
        console.log("error");
        return false    
    }); 
    
  }

  public async selectToGallery() {
    this.photos = []
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      allowEditing: false,        
      source: CameraSource.Photos,
      quality: 80
    })
    .then(async(fc) => { 
      const saveImageFile = await this.savePhoto(fc)
      this.photos.unshift(saveImageFile)
    
    /* Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    }) */
    })
    .catch(() => {
        console.log("error");
        return false    
    }); 
    
  }

  public async savePhoto(cameraPhoto: Photo){
    const base64Data = await this.readAsBase64(cameraPhoto)
    const fileName = new Date().getTime + '.jpeg'
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    })
    this.savedFile = base64Data;
    this.webPath = cameraPhoto.webPath
    return {
      filepath: fileName,
      webViewPath: cameraPhoto.webPath,      
    }
  }

  public async readAsBase64(cameraPhoto: Photo){
    const response = await fetch(cameraPhoto.webPath!)
    const blob = await response.blob()
    
    return await this.convertBlobToBase64(blob) as string
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader
    reader.onerror = reject
    reader.onload = () => {
      resolve(reader.result)
    } 
    reader.readAsDataURL(blob)
  })

  public async loadSaved(){
    const listPhotos = await Storage.get({key: this.PHOTO_STORAGE})
    this.photos = JSON.parse(listPhotos.value) || []
    for(let photo of this.photos){
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data
      })
      photo.webViewPath = `data:image/jpeg;base64,${readFile.data}`      
    }    
  }  
}
