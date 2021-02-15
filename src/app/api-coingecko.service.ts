import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { coin } from './coin.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCoingeckoService {
  private baseUrl =  'https://api.coingecko.com/api/v3/coins';
  coinsS: BehaviorSubject<coin[]>;
  coinsSubscription:Subscription;
  coins:coin[];
  coinsFaiv:coin[]=[];
  _coins:coin[];
  addfaivb=true;
constructor (public http: HttpClient) {
  this.get().subscribe((a)=>{
    this.coins=a;
    this._coins=a;
    this._coins.forEach(b=>this.favorites(b.symbol,false));
    this.coinsS=new BehaviorSubject<coin[]>(this._coins);
    this.coinsSubscription=this.getCoin().subscribe(a=>this.coins=a);
    
  });
  }
 get(coin?: string):Observable<any>{
  if (coin) return this.http.get(this.baseUrl+'/'+coin,{reportProgress: true})
  else return this.http.get(this.baseUrl,{reportProgress: true})
}
favorites(symbol:string,add:boolean){
 var a= this._coins.findIndex(a=>a.symbol==symbol)
//  this._coins.find(a=>a.symbol==symbol)
this._coins[a].add=add;
this.coins[a].add=add;
}
addFaiv(coin){
  if (this.coinsFaiv.length > 1) {return false; }
  else if (!this.coinsFaiv.find(a => a === coin)) {
    // else {
  this.coinsFaiv[this.coinsFaiv.length]=coin;
}
  this.favorites(coin.symbol,true)
  // this.addfaivb=false; console.log(this.coinsFaiv,this.addfaivb); 
  this.update();
  }
  deleteFavorites(coin){
    let i= this.coinsFaiv.findIndex(a => a === coin)
    this.coinsFaiv.splice(i,1);this.addfaivb=true;
    this.favorites(coin.symbol,false)
    this.coins=this._coins;
    this.update();
  }
  getCoin():Observable<coin[]>{
    // var a= of(this.coins);return a
    return this.coinsS
    
  }
// עדכון
  update(){
    //  return this.coinsS
    this.coinsS.next(this.coins)
    }
}
