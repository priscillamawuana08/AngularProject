import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() togglesidebarForMe: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  // togglesidebar(){
  //   this.togglesidebarForMe.emit;
  // }
}
