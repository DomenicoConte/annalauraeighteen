import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Annalaura Eighteen';
  height:number = 0;
  width:number = 0;
  divHeight:number = 0;

  ngOnInit(){
    console.log(window.innerHeight)
    this.height = window.innerHeight;    
    this.width = window.innerWidth;
  }

}
