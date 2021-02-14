import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  url= `https://api.coingecko.com/api/v3/coins`
  geta():Observable <any>{
    return this.httpClient.get(`${this.url}`)
    
      }
}
