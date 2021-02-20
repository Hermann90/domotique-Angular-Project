import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /*---- Initilyze globlal variable on this project ----*/
  isAuth: boolean = false;
  // appareilNameOne : string = "Frizer";
  // appareilNameTwo : string = "Computer";
  // appareilNameTree : string = "Watshing machine";

  /*---- Methods write in TypeScript ----*/
  
  //---- This method change isAuth value, after 4s 
  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    }, 4000
  );
  }

  onStartAll(){
    console.log("Start all device !!!");
  }

}
