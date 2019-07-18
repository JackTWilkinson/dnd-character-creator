import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DiceIll from "./DiceModel";

export default () => (
	<Router>
		<div>

			<Switch>
				{/*Enter Character Name*/}
				<Route path="/" component={CreateNew}/>
				{/*Choose Class*/}
				<Route path="/class/" component={ClassSelect}/>
				{/*Choose Race and Pick Stats*/}
				<Route component={Placeholder}/>
			</Switch>
		</div>
	</Router>
);

function Placeholder() {
	return <p>Placeholder for Race and Stat Selection.</p>
}

// function CreateNew() {
// 	let [name, setName] = useState('');
//
// 	return(
// 		<>
// 			<form className="nameForm">
// 				<input type="text" placeholder="Character's Name Here" value={this.state.name} onChange={setName(name.target.value)}/>
// 				<input type="submit" value="Go!"/>
// 			</form>
// 			<div className="dice">
// 				<DiceIll/>
// 			</div>
//
// 		</>
// 	)
// }

// /**
//  *
//  * @param name {string}
//  * @returns {*}
//  */
// function ClassSelect(name) {
// 	return (
// 		<>
// 			<h1> {name} </h1>
// 		</>
// 	)
// }

class CreateNew extends Component
{
	constructor(props)
	{
		super(props);
	}

	handleSubmit = (e) =>
	{
		//Todo do I need preventDefault here?
		e.preventDefault();

		this.props.nameInput(this.state.name);
		this.setState({name: ''});
	};

	handleChange = (e) => this.setState({name: e.target.value});

	render()
	{
		return (
			<>
				<form className="nameForm">
					<input type="text" placeholder="Character's Name Here" value={this.state.name} onChange={this.onChange}/>
					<button type="submit">Go!</button>
				</form>
				<div className="dice">
					<DiceIll/>
				</div>

			</>
		);
	}
}
//
// class ClassSelectOutdated extends Component
// {
//
// 	constructor(props)
// 	{
// 		super(props);
//
// 		this.state = {
// 			name: this.props.name,
// 			class: 5
// 		};
// 	}
//
// 	nameInput = (name) =>
// 	{
// 		this.setState({name: name});
// 	};
//
// 	render()
// 	{
// 		return (
// 			<>
// 				<h1> {this.state.name} </h1>
// 				<div className="classCard"></div>
// 			</>
// 		);
// 	}
//
// }