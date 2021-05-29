import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  
  emptyArray:Array<String> = [];
  length:number = 0 ;
  url:string = "";

  constructor() {
    this.length = 7;
    console.log(this.length)
    for(var x=0;x<7;x++){
      console.log('ciaone')
      this.emptyArray.push('dssad')
    }
  }

  fillUrlVariable(e:any){
    this.url = e.target.attributes[4].value ;
    console.log('url triggered : ' + this.url)
    //@ts-ignore
    $('#exampleModalCenter').modal('show'); 
  }


  ngOnInit(): void {
    
  }

}
