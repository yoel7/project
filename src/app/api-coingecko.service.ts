import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCoingeckoService {
  private baseUrl =  'https://api.coingecko.com/api/v3/coins';
  
constructor (public http: HttpClient) { }
get(coin?: string):Observable<any>{
  if (coin) return this.http.get(this.baseUrl+'/'+coin)
  return this.http.get(this.baseUrl)
}
}
