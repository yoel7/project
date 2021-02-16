import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.geta()
  }
  info: any[];
  MetaInfo: Boolean[] = [];
  FavoritesArray: any[] = [];
  isShowFavorites: Boolean = false;

  animal: string;
  name: string;
  geta() {
    this.api.geta().subscribe((a) => {
      this.info = a;
      this.info.forEach(element => {
        this.MetaInfo.push(false);
      });
    });
    console.log(2)
  }
  clickMorInfo(i) {
    debugger
    this.MetaInfo[i] = !this.MetaInfo[i];
  }
  addToFavorites(i) {
    this.FavoritesArray.push(this.info[i]);
    if (this.FavoritesArray.length == 5) {
      this.isShowFavorites = true;
    }
  }
  
  deleteToFavorites(i) {
    
    this.FavoritesArray.splice(i,1);
    this.isShowFavorites = false;
    
  }
}