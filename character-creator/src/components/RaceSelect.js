import React, {Component} from "react";
import {Button, Card, CardDeck, Nav, Spinner} from "react-bootstrap";
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
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount()
	{
		/*TODO
		 * This part is messy right now, it shouldn't take too long to clean up.
		 * However, it took me much to long to figure it out so I'll get back to it later
		 * when I'm not sure burnt out.
		*/
		let combinedData = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}};

		const dwarf =
			fetch('http://www.dnd5eapi.co/api/races/1').then(res =>
			{
				return res.json();
			});

		const elf =
			fetch('http://www.dnd5eapi.co/api/races/2').then(res =>
			{
				return res.json();
			});

		const halfling =
			fetch('http://www.dnd5eapi.co/api/races/3').then(res =>
			{
				return res.json();
			});

		const human =
			fetch('http://www.dnd5eapi.co/api/races/4').then(res =>
			{
				return res.json();
			});

		const dragonborn =
			fetch('http://www.dnd5eapi.co/api/races/5').then(res =>
			{
				return res.json();
			});

		const gnome =
			fetch('http://www.dnd5eapi.co/api/races/6').then(res =>
			{
				return res.json();
			});

		const halfelf =
			fetch('http://www.dnd5eapi.co/api/races/7').then(res =>
			{
				return res.json();
			});

		const halforc =
			fetch('http://www.dnd5eapi.co/api/races/8').then(res =>
			{
				return res.json();
			});

		const tiefling =
			fetch('http://www.dnd5eapi.co/api/races/9').then(res =>
			{
				return res.json();
			});

		Promise.all([dwarf, elf, halfling, human, dragonborn, gnome, halfelf, halforc, tiefling])
			   .then((values) =>
				   {
					   for (let i = 0; i < 9; i++)
					   {
						   combinedData[i] = values[i];
					   }

					   this.setState({
						   isLoaded: true,
						   items: combinedData
					   });
				   },
				   (error) =>
				   {
					   this.setState({
						   isLoaded: true,
						   error
					   });
				   });
	}

	render()
	{
		const {error, isLoaded} = this.state;
		let deckArr = [];

		if (error)
		{
			return <div>Error: {error.message} </div>;
		}
		else if (!isLoaded)
		{
			return (
				<div>
					<Spinner className="loading" animation="grow"/>
				</div>
			);
		}
		else
		{
			for (let i = 1; i <= 3; i++) //TODO 9 Races supported by DB
			{
				let race = this.state.items[i - 1];
				console.log(race);
				let stats = "#stats-" + race.name;
				let info = "#info-" + race.name;

				deckArr.push(
					<Card style={{width: '15rem'}} key={i}>
						<Card.Body>
							<Card.Header className="cardTitle"><Card.Title>{race.name}</Card.Title></Card.Header>
							<Card.Img src={racePictures[i - 1]}/>
							<Card.Header>
								<Nav variant="tabs" defaultActiveKey={ stats }>
									<Nav.Item>
										<Nav.Link href={ stats }>Stats</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link href={ info }>General Info</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
						</Card.Body>
						<Button variant="primary">Choose Race</Button>
						{/*TODO, can just change background to green or something when a class is selected*/}
					</Card>);
			}

			return (
				<div>
					<CardDeck>
						{deckArr}
					</CardDeck>
					<br/>
					<CardDeck>
						{deckArr}
					</CardDeck>
					<br/>
					<CardDeck>
						{deckArr}
					</CardDeck>
				</div>
			);
		}
	}
}

