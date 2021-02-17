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
  home = true;
  about = false;
  switchB:boolean;
  switch(){
    this.switchB=this.home;
    this.home=this.about;
    this.about=this.switchB;

  }
}

