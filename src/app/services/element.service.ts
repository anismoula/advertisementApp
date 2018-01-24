import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {Subject} from 'rxjs/Subject'

@Injectable()
export class ElementService {

  public newElementSubject = new Subject<any> ();

  constructor(private http: Http) { }

  getAllElements(){
    return this.http.get('Data/elements.json').map(res => res.json())
  }

  addElement(data){
    data.image = 'default';
    this.newElementSubject.next(data);
  }
  
  

}
