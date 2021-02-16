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
  // disabled=false;
  constructor(public apiCoingeckoService:ApiCoingeckoService) {}
  click(){
    // this.checkedF();
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
        this.cacheMore =undefined;console.log('קאש נמחק');
      }, 3*1000);
    })
    setTimeout(()=>this.nonUpdated=true,3*1000)
  }
    addFaiv(){
      var a = this.apiCoingeckoService.addFaiv(this.coin)
      if (a==false) { console.log(this.checked,'a==false');
        this.checked=false;
        var b =window.confirm('אין אפשרות לבחור יותר מ-5 מטבעות, האם אתה מעוניין להסיר מטבע?');
        // if(b) this.apiCoingeckoService.coins=this.apiCoingeckoService._coins.filter(a=>(a.add=true))
        if(b) {
          this.apiCoingeckoService.coins=this.apiCoingeckoService.coinsFaiv;console.log(this.checked,'checked -b=t');}
        if (!b) {
          this.checked=false;console.log(this.checked,'checked !b');this.constructor();}
        // this.checkedF();
      }
    // this.apiCoingeckoService.update();
    }
    checkedF(){
      this.checked=!this.checked; 
    }
    checkedHtml(a){
      // return this.checked; 
      console.log(a);
      
    }
    myFunction(){
      console.log(this.checked,'כניסה');
      // debugger
      //    version 1
      this.checked=!this.checked;
      // if (!this.checked) {
      //     this.apiCoingeckoService.coins=this.apiCoingeckoService._coins;
      //     this.apiCoingeckoService.deleteFavorites(this.coin);
      // } else this.addFaiv()
      //    version 2
      if (!this.checked) {
        console.log(this.checked,'מחיקה');
          this.apiCoingeckoService.coins=this.apiCoingeckoService._coins;
          this.apiCoingeckoService.deleteFavorites(this.coin);
      } else { this.addFaiv();console.log(this.checked,'add');}
        // 

    //   this.checkBox= document.getElementById("myCheck");
    // // this.checkBox= .getElementById("customSwitches");
    // if(this.checkBox.checked) this.addFaiv()
    // else this.apiCoingeckoService.deleteFavorites(this.coin);
    // else if (!this.checked) {
    //   for(let i=0;i< this.co.length;i++){}
    //   console.log(this.co);
    // }
    // else this.apiCoingeckoService.coinsFaiv.splice(this.coin);console.log(this.apiCoingeckoService.coinsFaiv);
    // }
    // this.checked=this.checkBox.checked;
    // this.apiCoingeckoService.update();
    // this.emit.emit(true)
    }
}
// this.a.addEventListener("click",this.click)

 // document.getElementById('raedMore').setAttribute("style", "display:none");
    // document.getElementById('raedMore').style.visibility='visible';
    // this.elementRef.nativeElement.
    // console.log('hag',this.elementRef);
    // if(this.visibility) {this.visibility=false}
    // else this.visibility=true;

    // st(){
  //   if(this.visibility) return 'visible'
  //   else return 'hidden';
  // }


   // public isCollapsed = true;
  // display:string='none'

  // a=document.getElementById("button")