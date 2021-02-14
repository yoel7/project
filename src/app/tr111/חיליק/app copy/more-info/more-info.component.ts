import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  
  @Input ()name: any

  constructor(private apib:ApiService) { }

  ngOnInit(): void {
   this.getb();
  }
infob:any;

getb(){
  this.apib.geta().subscribe((a)=>{
    this.infob=a;
    debugger
  });
}
}
