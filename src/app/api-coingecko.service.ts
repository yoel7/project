import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { coin } from './coin.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCoingeckoService {
  baseUrl =  'https://api.coingecko.com/api/v3/coins';
  coinsS: BehaviorSubject<coin[]>;
  // coinsSubscription:Subscription;
  coins:coin[];
  // coinsFaiv:coin[]=[];
  _coins:coin[];
  coinsFaivo:number=0;
  // addfaivb=true;
constructor (public http: HttpClient) {
  this.get().subscribe((a)=>{
    this.coins=a;
    this._coins=a;
    // this._coins.forEach(b=>this.favorites(b.symbol,false));
    this._coins.map(a=>(a.add=false));
    this.coins.map(a=>(a.add=false));
    this.coinsS=new BehaviorSubject<coin[]>(this._coins);
    // this.coinsSubscription=this.getCoin().subscribe(a=>this.coins=a);
    });
  }
get(coin?: string):Observable<any>{
  if (coin) return this.http.get(this.baseUrl+'/'+coin,{reportProgress: true})
  else return this.http.get(this.baseUrl,{reportProgress: true})
}
favorites(symbol:string,add:boolean){
  var a= this._coins.findIndex(a=>a.symbol==symbol);
  this._coins[a].add=add;
  this.coins[a].add=add;
}
addFaiv(coinSymbol){
  if (this._coins.filter(a=>a.add).length > 4) return false; 
  else  {
    this.favorites(coinSymbol,true);this.coinsFaivo++;console.log(this.coinsFaivo);
     return true;
  }
}
  deleteFavorites(coinSymbol){
    this.favorites(coinSymbol,false)
    this.coins=this._coins;
    this.coinsFaivo--;
    // this.update();
  }
// addFaiv(coin){
//   if (this.coinsFaiv.length > 1) {return false; }
//   else if (!this.coinsFaiv.find(a => a === coin)) {
//     this.coinsFaiv[this.coinsFaiv.length]=coin;
//     console.log(this.coinsFaiv);
//     this.favorites(coin.symbol,true)
  
//   }return true;
// }
//   deleteFavorites(coin){
//     let i= this.coinsFaiv.findIndex(a => a === coin)
//     this.coinsFaiv.splice(i,1);
//     this.favorites(coin.symbol,false)
//     this.coins=this._coins;
//     console.log(this.coinsFaiv,'deleteFavorites');
//     // this.update();
//   }


//   getCoin():Observable<coin[]>{
//     return this.coinsS
    
//   }
// // עדכון
//   update(){
//     //  return this.coinsS
//     this.coinsS.next(this.coins)
//     }
}
