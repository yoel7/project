import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiCoingeckoService } from './api-coingecko.service';
import { coin } from './coin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'project';
 
}

