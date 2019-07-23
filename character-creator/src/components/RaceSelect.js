import React, {Component} from "react";
import {Button, Card, CardDeck, Nav} from "react-bootstrap";
import {getRaces} from "./Helpers";
import Dwarf from "../resources/Dwarf.png";
import Elf from "../resources/Elf.png";
import Halfling from "../resources/Halfling.png";
import Human from "../resources/Human.png";
import Dragonborn from "../resources/Dragonborn.png";
import Gnome from "../resources/Gnome.png";
import HalfElf from "../resources/HalfElf.png";
import HalfOrc from "../resources/HalfOrc.png";
import Tiefling from "../resources/Tiefling.png";

const racePictures = [Dwarf, Elf, Halfling, Human, Dragonborn, Gnome, HalfElf, HalfOrc, Tiefling];

export default class RaceSelect extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			races: null
		};
	}

	populateDeck = () =>
	{
		const tempRaces = getRaces();
		console.log(JSON.stringify(tempRaces));
		let cards = [];

		for (let i = 1; i <= 3; i++) //TODO 9 Races supported by DB
		{
			cards.push(
				<Card style={{width: '18rem'}} key={i}>
					<Card.Body>
						<Card.Header><Card.Title>{  }</Card.Title></Card.Header>
						<Card.Img src={racePictures[i - 1]}/>
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
					</Card.Body>
					<Button variant="primary">Choose Race</Button>
					{/*TODO, need a method to change styling for the card that is selected*/}
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

