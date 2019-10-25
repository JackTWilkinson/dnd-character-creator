import React, {Component} from "react";
import Barbarian from "../resources/class/Barbarian.png";
import Bard from "../resources/class/Bard.png";
import Cleric from "../resources/class/Cleric.png";
import Druid from "../resources/class/Druid.png";
import Fighter from "../resources/class/Fighter.png";
import Monk from "../resources/class/Monk.png";
import Paladin from "../resources/class/Paladin.png";
import Ranger from "../resources/class/Ranger.png";
import Rogue from "../resources/class/Rogue.png";
import Sorcerer from "../resources/class/Sorcerer.png";
import Warlock from "../resources/class/Warlock.png";
import Wizard from "../resources/class/Wizard.png";
import {Button, Card, CardDeck, Spinner} from "react-bootstrap";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const classPictures = [Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard];

class ClassSelect extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			error: null,
			selectedClass: null,
			selectedRace: props.race,
			name: "Test Character", //props.name
			isLoaded: false,
			items: []
		};

	}

	componentDidMount()
	{
		let combinedData = {
			0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {},
			9: {}, 10: {}, 11: {}
		};
		let requestArr = [];
		// const barbarian =
		// 	fetch('http://www.dnd5eapi.co/api/classes/1').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const bard =
		// 	fetch('http://www.dnd5eapi.co/api/classes/2').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const cleric =
		// 	fetch('http://www.dnd5eapi.co/api/classes/3').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const druid =
		// 	fetch('http://www.dnd5eapi.co/api/classes/4').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const fighter =
		// 	fetch('http://www.dnd5eapi.co/api/classes/5').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const monk =
		// 	fetch('http://www.dnd5eapi.co/api/classes/6').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const paladin =
		// 	fetch('http://www.dnd5eapi.co/api/classes/7').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const ranger =
		// 	fetch('http://www.dnd5eapi.co/api/classes/8').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const rogue =
		// 	fetch('http://www.dnd5eapi.co/api/classes/9').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const sorcerer =
		// 	fetch('http://www.dnd5eapi.co/api/classes/10').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const warlock =
		// 	fetch('http://www.dnd5eapi.co/api/classes/11').then(res =>
		// 	{
		// 		return res.json();
		// 	});
		//
		// const wizard =
		// 	fetch('http://www.dnd5eapi.co/api/classes/12').then(res =>
		// 	{
		// 		return res.json();
		// 	});

		for (let i = 0; i < 12; i++)
		{
			requestArr.push(fetch('http://www.dnd5eapi.co/api/classes/' + i)
				.then( res => {
					return res.json();
				}));
		}
		// [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]
		Promise.all(requestArr)
			   .then((values) =>
				   {
				   	console.log(values);
					   for (let i = 0; i < 12; i++)
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

	toggle = (e) =>
	{
		//Sets selected race to the one that was just clicked.
		this.setState({selectedClass: e.currentTarget.value});
		console.log(this.state.selectedClass);
	};

	classContent = (charClass) =>
	{
		console.log(charClass);

		return (
			<Tabs>
				<TabList>
					<Tab>Starting Equipment</Tab>
					<Tab>Proficiencies</Tab>
					<Tab>Class Levels</Tab>
					<Tab>Extra Info</Tab>
				</TabList>
				<TabPanel>
					<b>Sample Text</b>
				</TabPanel>
				<TabPanel>
					<b>Sample Text</b>
				</TabPanel>
				<TabPanel>
					<b>Sample Text</b>
				</TabPanel>
				<TabPanel>
					<b>Sample Text</b>
				</TabPanel>
			</Tabs>
		);
	};

	render()
	{
		console.log(this.state.items[0]);
		const {error, isLoaded} = this.state;
		let deckArr1 = [];
		let deckArr2 = [];
		let deckArr3 = [];
		let deckArr4 = [];
		let count = 0;

		if (error)
		{
			return <div>Error: {error.message}</div>;
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
			for (let j = 0; j < 4; j++)
			{
				let tempArr = [];
				for (let i = 1; i <= 3; i++)
				{
					const charClass = this.state.items[count];
					let background = "light";
					const selectKey = charClass.name + '-card';

					if (charClass.name === this.state.selectedClass)
					{
						background = "success";
					}

					tempArr.push(
						<Card bg={background} style={{width: '15rem'}} key={i}>
							<Card.Header className="cardTitle"><Card.Title>{charClass.name}</Card.Title></Card.Header>
							<Card.Img src={classPictures[count]}/>
							<Card.Header>
								{this.classContent(charClass)}
							</Card.Header>
							<Button key={selectKey} value={charClass.name} onClick={this.toggle}>
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
						break;
					case 3:
						deckArr4 = tempArr;
				}
			}

			return (
				<div>
					<h1>Choose a Class for <u>{this.state.name}</u></h1>
					<h4>Character Class</h4>
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
						</CardDeck>
						<br/>
						<CardDeck>
							{deckArr4}
						</CardDeck>
					</div>
				</div>
			);
		}
	}
}

export default ClassSelect;