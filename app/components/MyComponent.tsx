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
