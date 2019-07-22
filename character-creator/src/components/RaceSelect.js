import React, {Component} from "react";
import {Button, Card, CardDeck, Nav} from "react-bootstrap";
import axios from "axios";

export default class RaceSelect extends Component
{
	selectedRace = (num) => {

	};

	handleSelect = () => {

	};

	populateDeck = () =>
	{
		let cards = [];

		for (let i = 1; i <= 3; i++) //TODO 9 Races supported by DB
		{
			const race = fetchRace(i);

			cards.push(
				<Card style={{width: '20rem'}} key={i}>
					<Card.Body>
						<Card.Header><Card.Title>{  }</Card.Title></Card.Header>
						<Card.Img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png"/>
						<Card.Header>
							<Nav variant="tabs" defaultActiveKey="#stats">
								<Nav.Item>
									<Nav.Link href="#stats">Stats</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link href="info">General Info</Nav.Link>
								</Nav.Item>
							</Nav>
						</Card.Header>
						<Card.Text>
							{}
							{}
						</Card.Text>
					</Card.Body>
					<Button variant="primary" onClick={this.selectedRace(i)}>Choose Race</Button>
				</Card>);
		}

		return cards;
	};

	render()
	{
		return (
			<CardDeck>
				{this.populateDeck()}
			</CardDeck>
		);
	}
}

/**
 *
 * @param selectNum {int}
 * @returns foundRace {JSON}
 */
function fetchRace(selectNum)
{
	let raceJSON = null;
	axios.get("http://www.dnd5eapi.co/api/races/" + selectNum + "/")
		 .then(res => {
			 raceJSON = res.data;
			 console.log(raceJSON);
		 });

	return raceJSON;
}
