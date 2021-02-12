import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiCoingeckoService } from './api-coingecko.service';
import { coin } from './coin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  coins:coin[];
  _coins:coin[];
  str='';
  constructor(private apiCoingeckoService : ApiCoingeckoService){
  }
  ngOnInit(): void {
     this.apiCoingeckoService.get().subscribe((a)=>{
      this.coins=a;this._coins=a;
      })
  }
  onKey(event) { 
    this.str = event.target.value;
    this.coins=this._coins.filter(b=>b.symbol.startsWith(this.str))
  }
  // onInput(value) {
  //   console.log(value)

  // }
}

