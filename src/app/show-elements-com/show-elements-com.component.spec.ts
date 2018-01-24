/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowElementsComComponent } from './show-elements-com.component';

describe('ShowElementsComComponent', () => {
  let component: ShowElementsComComponent;
  let fixture: ComponentFixture<ShowElementsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowElementsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowElementsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
