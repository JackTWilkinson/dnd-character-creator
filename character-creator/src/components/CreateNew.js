import React, {Component} from "react";
import {Col, FormControl, InputGroup} from "react-bootstrap";
import RaceSelect from "./RaceSelect";

export default class CreateNew extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			name: '',
			race: 1
		};

	}

	render()
	{
		return (
			<>
				<h1>Choose a Race and a Character Name</h1>
				<hr/>
				<InputGroup className="new-form">
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1">Test</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Enter Your Character's Name Here"
						aria-label="Enter Your Character's Name Here"
						aria-describedby="basic-addon1"
					/>
				</InputGroup>
				<Col className="race-form" lg="auto">
					<div>
						<br />
						<RaceSelect/>
					</div>
				</Col>
			</>
		);
	}
}