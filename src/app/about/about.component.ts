import { Component, OnInit } from '@angular/core';
import { ApiCoingeckoService } from '../api-coingecko.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

  constructor(public apiCoingeckoService:ApiCoingeckoService) { }


}
