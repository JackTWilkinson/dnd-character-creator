import React, {Component} from "react";
import {Button, Col, Form} from "react-bootstrap";
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
		const formCenter = {
			textAlign: 'center',
			margin: '0 auto'
		};

		const titleText = {
			fontFamily: 'Arial, Times, serif',
			color: 'white',
			textAlign: 'center',
			margin: '8px'
		};

		return (
			<>
				<h1>Choose a Race and a Character Name</h1>
				<hr/>
				<div>
					<Form>
						<Col style={formCenter} md={{ span:4, align:"center" }}>
							<Form.Group controlId="formCharName">
								<h4 style={titleText}>Character Name</h4>
								<Form.Control type="text" placeholder="Enter Name Here"/>
							</Form.Group>
						</Col>
						<div>
							<Form.Group controlId="formRace">
								<h4 style={titleText}>Character Race</h4>
								<RaceSelect/>
							</Form.Group>
						</div>
						<Button className="subButt" type="submit" variant="success">Confirm and move on</Button>
					</Form>
				</div>
			</>
		);
	}
}