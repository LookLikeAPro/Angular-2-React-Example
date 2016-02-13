import {Component} from 'angular2/core';

@Component({
	selector: 'react-component',
	template: '<h1>wrapper</h1>',
	inputs: ['component']
})
export class ReactComponent {
		component: any;
		ngOnInit() {
			console.log(this.component);
		}
}

