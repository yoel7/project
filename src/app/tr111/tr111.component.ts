import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tr111',
  templateUrl: './tr111.component.html',
  styleUrls: ['./tr111.component.css']
})
export class Tr111Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   myFunction() {
    var element = document.getElementById("myDIV");
    // עובד //
    element.classList.toggle("mystyle");
    //   בצורה ארוכה יותר   //
    // if (element.classList.length==0)
    // element.classList.add("mystyle");
    // else element.classList.remove("mystyle")
    console.log(element.classList);
    
 }
 
}
