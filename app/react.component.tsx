/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
import React = __React;
import {Component} from 'angular2/core';

@Component({
  selector: 'react-component',
  template: '<div [id]="id">wrapper{{id}}</div>',
  inputs: ['component']
})
export class ReactComponent {
  component: any;
  id: number;
  drawNode: any;
  constructor() {
    this.id = Math.floor(Math.random() * 9999999);
  }
  ngOnChanges() {
    if (this.drawNode) {
      React.render(this.component, this.drawNode);
    }
    console.log(this.id.toString());
  }
  ngAfterContentInit() {
    this.drawNode = document.getElementById(this.id.toString());
    console.log(document.getElementById(this.id.toString()));
    React.render(React.createElement(this.component), this.drawNode);
  }
}
