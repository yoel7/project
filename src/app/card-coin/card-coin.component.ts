import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiCoingeckoService } from '../api-coingecko.service';
import { coin } from '../coin.model';

@Component({
  selector: 'app-card-coin',
  templateUrl: './card-coin.component.html',
  styleUrls: ['./card-coin.component.css']
})
export class CardCoinComponent  {
  // @Output() emit: EventEmitter<boolean>=new EventEmitter<boolean>();
  @Input() coin:coin;
  @Input() checked:boolean;
  more:coin;
  cacheMore :boolean;
  visibility:boolean=false;
  // checked:boolean=false;
  nonUpdated=false
  info='More';
  constructor(public apiCoingeckoService:ApiCoingeckoService) {}
  click(){
    this.visibility=(!this.visibility);
    if(!this.visibility) {
        this.info='More';
      if (!this.cacheMore) this.more=undefined;
    } else this.info='Hide';this.getMore();
  }
  getMore(){
    if (this.cacheMore )  return;
    this.apiCoingeckoService.get(this.coin.id).subscribe((a)=>{
      this.more=a;
      this.cacheMore =true;this.nonUpdated=false;
      setTimeout(() => {
        this.cacheMore =undefined;
      }, 3*1000);
    })
    setTimeout(()=>this.nonUpdated=true,3*1000)
  }
    addFaiv(){
      // debugger;
      var a = this.apiCoingeckoService.addFav(this.coin.symbol)
      if (a==false) {
        var b=window.confirm('אין אפשרות לבחור יותר מ-5 מטבעות, האם אתה מעוניין להסיר מטבע?');
        if(b)  {this.apiCoingeckoService.coins=this.apiCoingeckoService._coins.filter(a=>a.add);}
        if (!b) {this.constructor(this.coin);}
      }
    }
    myFunction(){
      console.log(
       this.apiCoingeckoService._coins.filter(a=>a.add),'כניסה');
      this.checked=!this.checked;
      if (!this.checked) {
        //  this.apiCoingeckoService.coins=this.apiCoingeckoService._coins;
          this.apiCoingeckoService.deleteFav(this.coin.symbol);
      } else this.addFaiv();
      // console.log(                   מחיקה
      //   this.apiCoingeckoService._coins.filter(a=>a.add),'יציאה');
       
    }
}
