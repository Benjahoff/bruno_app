import { HttpClient } from '@angular/common/http';
import { Injectable, ClassProvider } from '@angular/core';
import { ENDPOINT } from '../utils/endpoint';

@Injectable({
  providedIn: 'root'
})

export class ScanService {
  
  constructor(private httpClient: HttpClient) {}
  
  sendPhoto(file: any){
    return this.httpClient.post<any>(`${ENDPOINT}/uploadFileApp`,file);    
  }


  search(searchParam:string) {
    let data = {
      searchParam : searchParam
    }
    return this.httpClient.post<any>(`${ENDPOINT}/search`,data);
  }


  sendMessage(file: any){
    return this.httpClient.post<any>(`${ENDPOINT}/sendMessage`,file);
  }

  generatePdfConsultLink(consultaId: any) {
    const data = {
      consulta: consultaId,      
    }
    return this.httpClient.post(`${ENDPOINT}/consultPdfLink`, data)
  }

  getConsults(file: any){
    return this.httpClient.post<any>(`${ENDPOINT}/consults`,file);    
  }

  getTimes(data: any){
    return this.httpClient.post<any>(`${ENDPOINT}/times`,data);    
  }

  setFeedback(data: any){
    return this.httpClient.post<any>(`${ENDPOINT}/setFeedback`,data);    
  }

  setFeedbackSatisfaccion(data: any){
    return this.httpClient.post<any>(`${ENDPOINT}/setFeedbackCheck`,data);    
  }
}
