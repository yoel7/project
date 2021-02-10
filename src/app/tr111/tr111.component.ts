import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tr111',
  templateUrl: './tr111.component.html',
  styleUrls: ['./tr111.component.css']
})
export class Tr111Component implements OnInit {
a=false
  constructor() { }

  ngOnInit(): void {
  }
  
   myFunction() {
     
    var element = document.getElementById("myDIV");
    // עובד //
    // element.classList.toggle("mystyle");            //  עובד //
    //   בצורה ארוכה יותר   עובד //
    // if (element.classList.length==0)
    // element.classList.add("mystyle");
    // else element.classList.remove("mystyle")
     //                  //
    // if (element.getAttribute.length>0) {        //  לא עבד
    //      שינוי אטריביוט עובד      !    //עובד //
    // if (this.a) {
    //   console.log("הייייוש");
    //   element.setAttribute("style", "display:block");this.a=false
    // }
    // else {element.setAttribute("style", "display:none");this.a=true}
  //                                      //עובד //
    
 }
 
}
