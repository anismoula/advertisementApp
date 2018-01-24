import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementService } from 'app/services/element.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})


export class AddFormComponent implements OnInit {

  @ViewChild('newElementForm') ElementForm: NgForm;


  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];

  constructor(public elementService: ElementService) { }

  ngOnInit() {
  }

  onElementSubmit(data): void {
    this.elementService.addElement(data);
    this.ElementForm.reset();
  }

}
