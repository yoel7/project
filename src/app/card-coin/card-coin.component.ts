import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiCoingeckoService } from '../api-coingecko.service';
import { coin } from '../coin.model';

@Component({
  selector: 'app-card-coin',
  templateUrl: './card-coin.component.html',
  styleUrls: ['./card-coin.component.css']
})
export class CardCoinComponent  {
  @Output() emit: EventEmitter<boolean>=new EventEmitter<boolean>();
  
  @Input() coin:coin;

  more:coin;
  // co:any[]=[];
  cacheMore :boolean;
  visibility:boolean=false;
  checked:boolean=false;
  nonUpdated=false
  info='More';
  constructor(public apiCoin:ApiCoingeckoService) {}
  click(){
      this.visibility=(!this.visibility);
    if(!this.visibility) {
        this.info='More';
      if (!this.cacheMore) this.more=undefined;
    } else this.info='Hide';this.getMore();
  }
  getMore(){
    if (this.cacheMore )  return;
    this.apiCoin.get(this.coin.id).subscribe((a)=>{
      this.more=a;
      this.cacheMore =true;this.nonUpdated=false;
      
      setTimeout(() => {
        this.cacheMore =undefined;console.log('קאש נמחק');
      }, 3*1000);
    })
    setTimeout(()=>this.nonUpdated=true,3*1000)
  }
  // click1(){
  //   // this.checked=!this.checked;
  //   // if(this.checked) this.addFaiv()
  //   this.checkBox= document.getElementById("customSwitches");
  //   // this.checkBox= .getElementById("customSwitches");
  //   if(this.checkBox.checked) this.addFaiv()
  //   else this.apiCoin.deleteFavorites(this.coin);
  //   // else if (!this.checked) {
  //   //   for(let i=0;i< this.co.length;i++){}
  //   //   console.log(this.co);
  //   // }
  //   // else this.apiCoin.coinsFaiv.splice(this.coin);console.log(this.apiCoin.coinsFaiv);
  //   // }
  //   this.checked=this.checkBox.checked;
  //   }
    addFaiv(){
      var a = this.apiCoin.addFaiv(this.coin)
      if (a==false) { var b =window.confirm('אין אפשרות לבחור יותר מ-5 מטבעות, האם אתה מעוניין להסיר מטבע?');
        if(b) this.apiCoin.coins=this.apiCoin.coinsFaiv;
        
    }
    this.apiCoin.update();
    }
    myFunction(){
      debugger
      this.checked=!this.checked;
      if(this.checked) this.addFaiv()
      else {this.apiCoin.deleteFavorites(this.coin);
        this.apiCoin.coins=this.apiCoin._coins;}
    //   this.checkBox= document.getElementById("myCheck");
    // // this.checkBox= .getElementById("customSwitches");
    // if(this.checkBox.checked) this.addFaiv()
    // else this.apiCoin.deleteFavorites(this.coin);
    // else if (!this.checked) {
    //   for(let i=0;i< this.co.length;i++){}
    //   console.log(this.co);
    // }
    // else this.apiCoin.coinsFaiv.splice(this.coin);console.log(this.apiCoin.coinsFaiv);
    // }
    // this.checked=this.checkBox.checked;
    this.apiCoin.update();
    this.emit.emit(true)
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