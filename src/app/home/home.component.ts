import { Component, OnInit, Output } from '@angular/core';
import { ApiCoingeckoService } from '../api-coingecko.service';
import { coin } from '../coin.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // coinsSubscription:Subscription
  coins:coin[];
  str='';
  constructor(public apiCoingeckoService : ApiCoingeckoService){
  // this.coins=[];  
  }
  ngOnInit(): void {
    //  this.apiCoingeckoService.getCoin().subscribe(
    //  a=>this.coins=a);
    }
  onKey(event) { 
    this.str = event.target.value;
    // יותר אלגנטי      //
    // this.apiCoingeckoService.coins=this.apiCoingeckoService._coins.filter
    // (b=>b.symbol.startsWith(this.str))
    //                    //
    if(this.str.length>0){
    this.apiCoingeckoService.coins=this.apiCoingeckoService._coins.filter
    (b=>b.symbol==this.str);
    // this.apiCoingeckoService.update();
    } 
    else this.apiCoingeckoService.coins=this.apiCoingeckoService._coins;
    // this.apiCoingeckoService.update();
  }
 
  emit(){
    // this.apiCoingeckoService.update()
  }
}
