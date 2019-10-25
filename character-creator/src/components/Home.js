import React, {Component} from "react";
import DiceIll from "./DiceModel";
import Button from "react-bootstrap/Button";

export default class Home extends Component
{
	handleSubmit = () => {
		this.props.history.push("/create/new");
	};

	render() {
		return(
			<>
				<h1>Dnd Character Creator</h1>
				<div className="dice">
					<DiceIll/>
				</div>
				<div className="confirmButt">
					<Button variant="outline-success" onClick={this.handleSubmit}>Get Started</Button>
				</div>
			</>
		)
	}
}