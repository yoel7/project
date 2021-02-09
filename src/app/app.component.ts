import { Component, OnInit } from '@angular/core';
import { ApiCoingeckoService } from './api-coingecko.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  coins:any[];
  constructor(private apiCoingeckoService : ApiCoingeckoService){
  }
  ngOnInit(): void {
     this.apiCoingeckoService.get().subscribe((a)=>this.coins=a);
  }
}
