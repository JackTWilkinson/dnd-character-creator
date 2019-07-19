import React, {Component} from "react";

class ClassSelect extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			name: "",
			class: 5
		};

	}

	render()
	{
		return (
			<>
				<h1>Test Message</h1>
			</>
		);
	}
}

export default ClassSelect;