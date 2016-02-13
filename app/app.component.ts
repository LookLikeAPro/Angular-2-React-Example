import {Component} from 'angular2/core';
import {ReactComponent} from './angular2-react/component';
import MyComponent from './components/MyComponent';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1><react-component [component]="embedComponent" [props]="embedComponentProps"></react-component>',
    directives: [ReactComponent]
})
export class AppComponent {
    embedComponent = MyComponent;
    embedComponentProps = {
        "name": "person"
    };
}
