import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ApiCoingeckoService } from '../api-coingecko.service';
import { coin } from '../coin.model';

@Component({
  selector: 'app-card-coin',
  templateUrl: './card-coin.component.html',
  styleUrls: ['./card-coin.component.css']
})
export class CardCoinComponent implements OnInit {
  @Input() coin:coin;
  more:coin;
  cacheMore :coin;
  // public isCollapsed = true;
  // display:string='none'
  visibility:boolean=false;
  // a=document.getElementById("button")
  constructor(public apiCoin:ApiCoingeckoService) { }

  ngOnInit(): void {
    // this.a.addEventListener("click",this.click)
  }
  click(){
    // document.getElementById('raedMore').setAttribute("style", "display:none");
    // document.getElementById('raedMore').style.visibility='visible';
    // this.elementRef.nativeElement.
    // console.log('hag',this.elementRef);
    // if(this.visibility) {this.visibility=false}
    // else this.visibility=true;
    // גירסה א עובדת ופשוטה //
  this.visibility=(!this.visibility);
  if(this.visibility) this.get()
  }
  get(){
    if (this.cacheMore ) return;
    this.apiCoin.get(this.coin.id).subscribe((a)=>{
      this.more=a;
      this.cacheMore =a;
      setTimeout(() => {
        this.cacheMore =undefined;
      }, 120*1000);
      // עד כאן גירסה א   //
    })
  }
  // st(){
  //   if(this.visibility) return 'visible'
  //   else return 'hidden';
  // }
}
