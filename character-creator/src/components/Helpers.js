import axios from "axios";

export function getRaces()
{

	let promises = [];
	let tempRaces = [];

	for (let i = 1; i <= 9; i++)
	{
		promises.push(new Promise(
			(resolve) =>
			{
				axios.get("http://www.dnd5eapi.co/api/races/" + i).then(result => resolve(result));
			}
		));
	}

	for (let i = 0; i < promises.length; i++)
	{
		let promise = promises[i];
		promise.then(
			result =>
			{
				tempRaces.push(result);
			});
	}

	//TODO this is currently busted. It isn't returning the final objects. (waiting on the promises)
	return tempRaces;
}