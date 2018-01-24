import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowElementsComponent } from './show-elements/show-elements.component';
import { ShowElementsComComponent } from './show-elements-com/show-elements-com.component';
import { ElementService } from 'app/services/element.service';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowElementsComponent,
    ShowElementsComComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
