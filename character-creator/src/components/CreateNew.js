import React, {Component} from "react";
import Col from "react-bootstrap/Col";
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
		//TODO fix db query method let race = queryFiveDB(this.state.race, 'races');

		return (
			<>
				<h1>Choose a Race and a Character Name</h1>
				<hr/>
				<form className="new-form">
					<input type="text" placeholder="Enter Characters name here"/>
					<Col className="race-form" lg="auto">
						<div>
							<RaceSelect/>
						</div>
					</Col>
				</form>
			</>
		);
	}
}