import React, {Component} from "react";

class ClassSelect extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			error: null,
			selectedClass: null,
			isLoaded: false,
			items: []
		};

	}

	componentDidMount()
	{
		let combinedData = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}};

		const barbarian =
			fetch('http://www.dnd5eapi.co/api/classes/1').then(res =>
			{
				return res.json();
			});

		const bard =
			fetch('http://www.dnd5eapi.co/api/classes/2').then(res =>
			{
				return res.json();
			});

		const cleric =
			fetch('http://www.dnd5eapi.co/api/classes/3').then(res =>
			{
				return res.json();
			});

		const druid =
			fetch('http://www.dnd5eapi.co/api/classes/4').then(res =>
			{
				return res.json();
			});

		const fighter =
			fetch('http://www.dnd5eapi.co/api/classes/5').then(res =>
			{
				return res.json();
			});

		const monk =
			fetch('http://www.dnd5eapi.co/api/classes/6').then(res =>
			{
				return res.json();
			});

		const paladin =
			fetch('http://www.dnd5eapi.co/api/classes/7').then(res =>
			{
				return res.json();
			});

		const ranger =
			fetch('http://www.dnd5eapi.co/api/classes/8').then(res =>
			{
				return res.json();
			});

		const rogue =
			fetch('http://www.dnd5eapi.co/api/classes/9').then(res =>
			{
				return res.json();
			});

		const sorcerer =
			fetch('http://www.dnd5eapi.co/api/classes/10').then(res =>
			{
				return res.json();
			});

		const warlock =
			fetch('http://www.dnd5eapi.co/api/classes/11').then(res =>
			{
				return res.json();
			});

		const wizard =
			fetch('http://www.dnd5eapi.co/api/classes/12').then(res =>
			{
				return res.json();
			});

		Promise.all([])
			.then((values) =>
			{
				for (let i = 0; i < 12; i++)
				{
					combinedData[i] = values[i];
				}

				this.setState({
					isLoaded: true,
					itemds: combinedData
				})
			},
				(error) =>
				{
					this.setState({
						isLoaded: true,
						error
					})
				})
	}

	render()
	{
		return (
			<>
				<h1>Test Message</h1>
			</>
		);
	}
}

export default ClassSelect;