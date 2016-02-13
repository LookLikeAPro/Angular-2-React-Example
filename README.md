## React Usage in Angular 2 Example

## Usage

	npm install
	npm start

To regenerate typescript typings:

	npm install -g tsd
	tsd install react react-dom

## Adding to existing project

Due to the sad state of angular 2 tooling, we are unable to create an angular2-react npm package that works.

However you can still integrate angular2-react in existing angular2 projects easily using the following steps.

1. Install react
	
		npm install --save react react-dom

2. Import react

	Add the following lines to html template below the angular2 script:

		<script src="node_modules/angular2/bundles/angular2.dev.js"></script>
		<!-- start of angular2-react -->
		<script src="node_modules/react/dist/react.min.js"></script>
		<script src="node_modules/react-dom/dist/react-dom.min.js"></script>
		<script>var __React = React;</script> <!-- how sad -->
		<!-- end -->

3. Add react typings
	
		npm install -g tsd
		//In parent folder of typings folder:
		//If there is no typings folder, it is recommended to be put in project root, under source control as well
		tsd install react react-dom

4. Add angular2-react

	Dropping `angular2-react` folder anywhere inside app folder

5. Create components

	Components look like this:

		import React from "../angular2-react/react";
		// Cannot do `import React, {Component, Proptype} from "..."` because the react import is hacky at the moment

		// IMO interface is quite pointless. Too much work to export it and use as a data type when it is only for one component
		// Might as well put <any, any> and use React props type checking
		interface MyComponentProps {
			name: string;
		}

		export default class MyComponent extends React.Component<MyComponentProps, any> {
			render() {
				const {name} = this.props;
				return <div>Hi {name}, this is a react component and my props is {JSON.stringify(this.props)}</div>;
			}
		}

	See example under `app/components/MyComponent.tsx`

6. Use components

	Embed the component in angular2 components using the react-component helper

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


