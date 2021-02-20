import { createInput } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  /* ----- Variable Declaration ------*/
  // @Input() appareilName:string;
  // @Input() appareilStatus:String;

  /*--------- Variables initilyzation ------------ */
  deviceName : string = "Wasching Machine";
  state : String = "starting ...";

  constructor() { }

  ngOnInit(): void {
  }

  getState(): String {
    return this.state;
  }
  // getStatus(): String{
  //   return this.appareilStatus;
  // }

}
