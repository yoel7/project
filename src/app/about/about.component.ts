import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiCoingeckoService } from '../api-coingecko.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
@Output() emit: EventEmitter<boolean>=new EventEmitter<boolean>();
str:string='';
view:boolean=false;
  constructor(public apiCoingeckoService:ApiCoingeckoService) { }
  onKey(event) { 
    this.str = event.target.value;
    // יותר אלגנטי      //
    // this.apiCoingeckoService.coins=this.apiCoingeckoService._coins.filter
    // (b=>b.symbol.startsWith(this.str))
    //                    //
    if(this.str.length>0){
    this.view=true;
    this.apiCoingeckoService.coins=this.apiCoingeckoService._coins.filter
     (b=>b.symbol.startsWith(this.str))
    //                    //
    // this.apiCoingeckoService.coins=this.apiCoingeckoService._coins.filter
    // (b=>b.symbol==this.str);
    // this.apiCoingeckoService.update();
    } 
    else {this.view=false;
    this.apiCoingeckoService.coins=this.apiCoingeckoService._coins;}
    // this.apiCoingeckoService.update();
  }
  emitF(){
    this.emit.emit()
  }
}
