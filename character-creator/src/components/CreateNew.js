import React, {Component} from "react";
import queryFiveDB from "./Helpers";

export default class CreateNew extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			name: '',
			race: 1
		}

	}

	render()
	{
		let race = queryFiveDB(this.state.race, 'races').data;

		return (
			<>
				<h1>New Character</h1>
				<hr />
				<form className="raceForm">
					<input type="text" placeholder="Enter Characters name here"/>
					<div className="raceCard">
						<button>
							Go Left
						</button>
						<div>
							<h3>Race name</h3><br/>
							<h3>Race Bonus:</h3><p>{  }</p><br />
							<h3>Size:</h3><p>{ race.size }</p><br />
							<h3>Starting Proficiencies:</h3><p> {  } </p>
						</div>
						<button>
							Go Right
						</button>
					</div>
				</form>
			</>
		);
	}
}