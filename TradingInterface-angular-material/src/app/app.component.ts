import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TradingInterface-angular-material';
  hide = true;
  sideBarOpen = true;

  ngOnInit(){}

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
