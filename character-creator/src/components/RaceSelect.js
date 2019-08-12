import React, {Component} from "react";
import {Button, Card, CardDeck, Spinner} from "react-bootstrap";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
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
			selectedRace: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount()
	{
		/*TODO
		 * This part is messy right now, it shouldn't take too long to clean up.
		 * However, it took me much to long to figure it out so I'll get back to it later
		 * when I'm not so burnt out on dealing with api calls.
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

	//TODO I think this does what I want?
	toggle = (choice) =>
	{
		//change previously selected card (if exists) to normal color
		//change new card color
		this.setState({selectedRace: choice});
	};

	raceContent = (race) =>
	{
		const abilityArr = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
		const abilityBonus = race.ability_bonuses;
		const traitArr = race.traits;
		const langArr = race.languages;
		const subArr = race.subraces;
		let languageStr = 'Common';
		let abilityShow = [];
		let traitShow = [];
		let subShow = [];
		let subRaces = null;

		for (let i = 0; i < 6; i++)
		{
			if (abilityBonus[i] !== 0)
			{
				const id = i + '-abil-' + race.name;
				abilityShow.push(<li key={id}>{abilityArr[i]}: +{abilityBonus[i]}</li>);
			}
		}

		for (let i = 0; i < traitArr.length; i++)
		{
			const id = i + '-trait-' + race.name;
			traitShow.push(<li key={id}>{traitArr[i].name}</li>);
		}

		if (langArr.length > 1)
		{
			for (let i = 1; i < langArr.length; i++)
			{
				languageStr += ', ' + langArr[i].name;
			}
		}

		if (subArr !== null)
		{
			for (let i = 0; i < subArr.length; i++)
			{
				const id = i + '-sub-' + race.name;
				subShow.push(<li key={id}>{subArr[0].name}</li>);
			}
		}

		if (subShow.length !== 0)
		{
			subRaces =
				<>
					<b>Subraces: </b>
					<ul>
						{subShow}
					</ul>
				</>;
		}

		return (
			<Tabs>
				<TabList>
					<Tab>Stats</Tab>
					<Tab>Info</Tab>
					<Tab>Extra Info</Tab>
				</TabList>
				<TabPanel>
					<b>Ability Bonuses: </b>
					<ul>{abilityShow}</ul>
					<b>Traits: </b>
					<ul>{traitShow}</ul>
					<b>Speed: </b>{race.speed}ft <br/>
					<b>Size: </b>{race.size}<br/>
					<b>Languages: </b>{languageStr}<br/>
				</TabPanel>
				<TabPanel>
					<b>Age: </b>{race.age}<br/>
					<b>Alignment: </b>{race.alignment} <br/>
					{subRaces}
				</TabPanel>
				<TabPanel>
					<b>Language Description: </b>{race.language_desc}<br/>
					<b>Size Description: </b>{race.size_description}
				</TabPanel>
			</Tabs>
		);
	};

	render()
	{
		const {error, isLoaded} = this.state;
		let deckArr1 = [];
		let deckArr2 = [];
		let deckArr3 = [];
		let count = 0;

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
			for (let j = 0; j < 3; j++)
			{
				let tempArr = [];
				let background = "light";
				for (let i = 1; i <= 3; i++)
				{
					let race = this.state.items[count];
					const selectKey = race.name + '-card';

					if (race.name === this.state.selectedRace)
					{
						background = "success";
					}

					tempArr.push(
						<Card bg={background} style={{width: '15rem'}} key={i}>
							<Card.Header className="cardTitle"><Card.Title>{race.name}</Card.Title></Card.Header>
							<Card.Img src={racePictures[count]}/>
							<Card.Header>
								{this.raceContent(race)}
							</Card.Header>
							<Button key={selectKey} variant="primary" onClick={this.toggle(race.name)}>
								Choose Race
							</Button>
						</Card>);
					count++;
				}
				switch (j)
				{
					case 0:
						deckArr1 = tempArr;
						break;
					case 1:
						deckArr2 = tempArr;
						break;
					case 2:
						deckArr3 = tempArr;
				}
			}

			return (
				<div>
					<CardDeck>
						{deckArr1}
					</CardDeck>
					<br/>
					<CardDeck>
						{deckArr2}
					</CardDeck>
					<br/>
					<CardDeck>
						{deckArr3}
					</CardDeck><br/>
				</div>
			);
		}
	}
}

/*
TODO certain races (ex: dwarves) get a free proficiency in tools of their choice.
Along with this there are several cases where concentric api requests are required
in order to get info on traits and other relevant info. Maybe include a help bubble
on top of the screen? May be too cheesy.
most importantly, subraces require this for the ability bonuses/extra info
SOME MORE QOL Notes:
 -Standardize card size (add a scroll wheel)
 -Maybe a progress bar
 - card titles change font
 */

