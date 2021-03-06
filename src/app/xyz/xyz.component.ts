import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // declared array of months.
  months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

  isavailable = true; //variable is set to true
  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }
  changemonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }
}
