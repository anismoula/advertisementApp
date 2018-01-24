import { Component, OnInit, Input } from '@angular/core';
import {Element} from './../element'


@Component({
  selector: 'app-show-elements-com',
  templateUrl: './show-elements-com.component.html',
  styleUrls: ['./show-elements-com.component.css']
})
export class ShowElementsComComponent implements OnInit {
@Input('element') element: Element;
  constructor() { }

  ngOnInit() {
    let bedrooms= this.element.bedrooms;
    
  }

}
