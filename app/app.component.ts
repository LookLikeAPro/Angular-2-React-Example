import {Component} from 'angular2/core';
import {ReactComponent} from './react.component';
import TestComponent from './components/test';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1><react-component [component]="TestComponent"></react-component>',
  directives: [ReactComponent]
})
export class AppComponent {
  TestComponent = TestComponent;
}
