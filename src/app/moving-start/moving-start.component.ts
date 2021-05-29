import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moving-start',
  templateUrl: './moving-start.component.html',
  styleUrls: ['./moving-start.component.css']
})
export class MovingStartComponent implements OnInit {
  @Input()
  heigthParent:any;

  constructor() { }

  ngOnInit(): void {
  }

}
