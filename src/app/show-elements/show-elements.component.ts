import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Element } from '@angular/compiler/src/ml_parser/ast';
import { ElementService } from '../services/element.service';

@Component({
  selector: 'app-show-elements',
  templateUrl: './show-elements.component.html',
  styleUrls: ['./show-elements.component.css']
})
export class ShowElementsComponent implements OnInit {

  elements: Array<any>;
  error: string;

  constructor(
    private http: Http,
    private elementService: ElementService
    
  ) { }

  ngOnInit() {
    this.elementService.getAllElements()
    .subscribe(
      data => this.elements = data,
      error => this.error = error.statusText
    );

    this.elementService.newElementSubject.subscribe(
      data => this.elements.push(data)
    );
    
  }

}
